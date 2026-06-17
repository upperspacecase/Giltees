import Link from "next/link";
import type { Product } from "@/lib/products";
import { TeeMockup } from "./TeeMockup";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block overflow-hidden rounded-3xl border border-blush-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <TeeMockup product={product} className="rounded-b-none" />
      <div className="flex items-center justify-between gap-3 p-5">
        <div>
          <p className="font-display text-xl font-600 capitalize text-ink">
            “{product.word}”
          </p>
          <p className="text-sm text-ink-muted">The reclaim tee</p>
        </div>
        <span className="rounded-full bg-blush-100 px-3 py-1 text-sm font-semibold text-blush-700">
          ${product.price}
        </span>
      </div>
    </Link>
  );
}
