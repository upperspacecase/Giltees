"use client";

import Link from "next/link";
import { useWishlist } from "@/components/WishlistContext";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { ShareIcon } from "@/components/icons";

export default function WishlistPage() {
  const { slugs, count } = useWishlist();
  const wished = products.filter((p) => slugs.includes(p.slug));
  const picks = products.filter((p) => !slugs.includes(p.slug)).slice(0, 4);

  return (
    <div className="container-x py-12">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
        <h1 className="display text-5xl">Wishlist</h1>
        <button
          type="button"
          onClick={() => {
            if (typeof navigator !== "undefined" && navigator.share) {
              navigator.share({ title: "My Giltees wishlist" }).catch(() => {});
            }
          }}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider2 hover:opacity-60"
        >
          <ShareIcon className="h-5 w-5" />
          Share wishlist
        </button>
      </div>

      <p className="mt-5 text-ink-muted">
        {count} item{count === 1 ? "" : "s"}
      </p>

      {count > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {wished.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-ink-muted">
            You don&apos;t have any words in your wishlist yet.
          </p>
          <Link href="/shop" className="btn-primary mt-6">
            Collection
          </Link>
        </div>
      )}

      {/* PICKS JUST FOR YOU */}
      {picks.length > 0 && (
        <section className="mt-20 border-t border-line pt-12">
          <h2 className="display text-3xl">Picks just for you</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
            {picks.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
