"use client";

import { useState } from "react";
import { useCart } from "./CartContext";
import { useUI } from "./UIContext";
import { useWishlist } from "./WishlistContext";
import { HeartIcon } from "./icons";
import type { Product } from "@/lib/products";

const SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"];

export function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { openCart } = useUI();
  const { has, toggle } = useWishlist();
  const [size, setSize] = useState("M");
  const wished = has(product.slug);

  function add() {
    addItem(
      { slug: product.slug, word: product.word, price: product.price, size },
      1
    );
    openCart();
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="eyebrow">Size — unisex fit</span>
        <span className="text-xs text-ink-muted">XS–4XL</span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-8">
        {SIZES.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSize(s)}
            aria-pressed={size === s}
            className={`h-11 border text-sm font-semibold transition ${
              size === s
                ? "border-ink bg-ink text-paper"
                : "border-line text-ink hover:border-ink"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <button type="button" onClick={add} className="btn-primary flex-1">
          Add to bag — ${product.price}
        </button>
        <button
          type="button"
          onClick={() => toggle(product.slug)}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wished}
          className="grid h-auto w-14 shrink-0 place-items-center border border-ink hover:bg-bone"
        >
          <HeartIcon className="h-5 w-5" filled={wished} />
        </button>
      </div>
    </div>
  );
}
