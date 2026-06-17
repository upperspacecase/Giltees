"use client";

import Link from "next/link";
import type { Product } from "@/lib/products";
import { TeeMockup } from "./TeeMockup";
import { useWishlist } from "./WishlistContext";
import { HeartIcon } from "./icons";

export function ProductCard({ product }: { product: Product }) {
  const { has, toggle } = useWishlist();
  const wished = has(product.slug);

  return (
    <div className="group relative">
      <button
        type="button"
        aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
        aria-pressed={wished}
        onClick={() => toggle(product.slug)}
        className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center text-ink transition hover:scale-110"
      >
        <HeartIcon
          className="h-5 w-5 drop-shadow-sm"
          filled={wished}
        />
      </button>

      <Link href={`/shop/${product.slug}`} className="block">
        <div className="overflow-hidden">
          <TeeMockup
            product={product}
            className="transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="pt-3">
          <p className="text-[11px] uppercase tracking-wider2 text-ink-muted">
            The reclaim tee
          </p>
          <p className="mt-1 font-display font-bold capitalize">
            “{product.word}”
          </p>
          <p className="mt-0.5 text-sm text-ink-muted">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
