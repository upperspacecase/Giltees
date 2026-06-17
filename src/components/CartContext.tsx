"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartItem = {
  slug: string;
  word: string;
  price: number;
  size: string;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  updateQty: (slug: string, size: string, qty: number) => void;
  removeItem: (slug: string, size: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "giltees-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load any saved cart on first mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore malformed storage */
    }
    setHydrated(true);
  }, []);

  // Persist after hydration so we never stomp a saved cart with [].
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage may be unavailable */
    }
  }, [items, hydrated]);

  const value = useMemo<CartContextValue>(() => {
    const addItem: CartContextValue["addItem"] = (item, qty = 1) => {
      setItems((prev) => {
        const idx = prev.findIndex(
          (i) => i.slug === item.slug && i.size === item.size
        );
        if (idx >= 0) {
          const next = [...prev];
          next[idx] = { ...next[idx], qty: next[idx].qty + qty };
          return next;
        }
        return [...prev, { ...item, qty }];
      });
    };

    const updateQty: CartContextValue["updateQty"] = (slug, size, qty) => {
      setItems((prev) =>
        prev
          .map((i) =>
            i.slug === slug && i.size === size
              ? { ...i, qty: Math.max(0, qty) }
              : i
          )
          .filter((i) => i.qty > 0)
      );
    };

    const removeItem: CartContextValue["removeItem"] = (slug, size) => {
      setItems((prev) =>
        prev.filter((i) => !(i.slug === slug && i.size === size))
      );
    };

    const clear = () => setItems([]);

    const count = items.reduce((n, i) => n + i.qty, 0);
    const subtotal = items.reduce((n, i) => n + i.qty * i.price, 0);

    return { items, count, subtotal, addItem, updateQty, removeItem, clear };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
