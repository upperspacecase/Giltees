"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "./CartContext";
import type { Product } from "@/lib/products";

const SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"];

export function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState("M");
  const [added, setAdded] = useState(false);

  function add() {
    addItem(
      {
        slug: product.slug,
        word: product.word,
        price: product.price,
        size,
      },
      1
    );
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2500);
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="eyebrow">Size — unisex fit</span>
        <span className="text-sm text-ink-muted">XS–4XL</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {SIZES.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSize(s)}
            aria-pressed={size === s}
            className={`min-w-12 rounded-full border px-4 py-2 text-sm font-semibold transition ${
              size === s
                ? "border-ink bg-ink text-blush-50"
                : "border-ink/20 text-ink hover:border-ink"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <button type="button" onClick={add} className="btn-pink">
          Add to cart — ${product.price}
        </button>
        <Link href="/cart" className="btn-outline">
          Go to cart
        </Link>
      </div>

      <p
        aria-live="polite"
        className={`mt-3 text-sm font-semibold text-blush-600 transition ${
          added ? "opacity-100" : "opacity-0"
        }`}
      >
        Added “{product.word}” ({size}) to your cart 🖤
      </p>
    </div>
  );
}
