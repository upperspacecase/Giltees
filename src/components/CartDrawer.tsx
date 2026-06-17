"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "./CartContext";
import { useUI } from "./UIContext";
import { products } from "@/lib/products";
import { ProductThumb } from "./ProductThumb";
import { CloseIcon } from "./icons";

export function CartDrawer() {
  const { items, subtotal, updateQty, removeItem } = useCart();
  const { cartOpen, closeCart } = useUI();

  // Lock body scroll and close on Escape while the drawer is open.
  useEffect(() => {
    if (!cartOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCart();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [cartOpen, closeCart]);

  if (!cartOpen) return null;

  const explore = products.slice(0, 4);

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true">
      <button
        type="button"
        aria-label="Close bag"
        onClick={closeCart}
        className="absolute inset-0 animate-fade bg-ink/30"
      />

      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md animate-drawerIn flex-col bg-paper shadow-2xl">
        {/* Header */}
        <div className="relative flex h-[72px] shrink-0 items-center justify-center border-b border-line">
          <h2 className="display text-xl">My Bag</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close"
            className="absolute right-5 hover:opacity-60"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        {items.length === 0 ? (
          /* Empty state — mirrors the reference */
          <div className="flex flex-1 flex-col overflow-y-auto">
            <div className="px-6 py-12 text-center">
              <p className="display text-2xl">Oops…</p>
              <p className="mt-2 text-ink-muted">
                You have no items in your bag
              </p>
              <Link
                href="/shop"
                onClick={closeCart}
                className="btn-outline mt-6 w-full sm:w-auto"
              >
                Collection
              </Link>
            </div>

            <div className="border-t border-line px-6 py-6">
              <h3 className="display text-lg">Explore More</h3>
              <ul className="mt-4 divide-y divide-line">
                {explore.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/shop/${p.slug}`}
                      onClick={closeCart}
                      className="flex items-center gap-4 py-4"
                    >
                      <ProductThumb
                        slug={p.slug}
                        word={p.word}
                        className="h-16 w-14 text-sm"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block text-[11px] uppercase tracking-wider2 text-ink-muted">
                          The reclaim tee
                        </span>
                        <span className="block font-display font-bold capitalize">
                          “{p.word}”
                        </span>
                        <span className="block text-sm text-ink-muted">
                          ${p.price}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <>
            {/* Items */}
            <ul className="flex-1 divide-y divide-line overflow-y-auto px-6">
              {items.map((item) => (
                <li
                  key={`${item.slug}-${item.size}`}
                  className="flex gap-4 py-5"
                >
                  <ProductThumb
                    slug={item.slug}
                    word={item.word}
                    className="h-24 w-20 text-base"
                  />

                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="text-[11px] uppercase tracking-wider2 text-ink-muted">
                      The reclaim tee
                    </span>
                    <span className="font-display font-bold capitalize">
                      “{item.word}”
                    </span>
                    <span className="text-sm text-ink-muted">
                      Size {item.size} · ${item.price}
                    </span>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-line">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() =>
                            updateQty(item.slug, item.size, item.qty - 1)
                          }
                          className="px-3 py-1 text-lg leading-none hover:bg-bone"
                        >
                          –
                        </button>
                        <span className="w-7 text-center text-sm font-semibold">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() =>
                            updateQty(item.slug, item.size, item.qty + 1)
                          }
                          className="px-3 py-1 text-lg leading-none hover:bg-bone"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.slug, item.size)}
                        className="text-[11px] font-semibold uppercase tracking-wider2 underline underline-offset-4 hover:opacity-60"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="shrink-0 border-t border-line px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider2 text-ink-muted">
                  Subtotal
                </span>
                <span className="font-display text-lg font-bold">
                  ${subtotal}
                </span>
              </div>
              <p className="mt-1 text-xs text-ink-muted">
                Shipping &amp; taxes calculated at checkout.
              </p>
              <Link
                href="/checkout"
                onClick={closeCart}
                className="btn-primary mt-4 w-full"
              >
                Checkout
              </Link>
              <Link
                href="/cart"
                onClick={closeCart}
                className="mt-3 block text-center text-[11px] font-semibold uppercase tracking-wider2 underline underline-offset-4 hover:opacity-60"
              >
                View full bag
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
