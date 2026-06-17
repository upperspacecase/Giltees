"use client";

import Link from "next/link";
import { useCart } from "@/components/CartContext";
import { ProductThumb } from "@/components/ProductThumb";

export default function CartPage() {
  const { items, subtotal, updateQty, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="container-x py-24 text-center">
        <h1 className="display text-4xl">Your bag is empty</h1>
        <p className="mt-3 text-ink-muted">
          Nothing reclaimed yet. Find the word that was used against you.
        </p>
        <Link href="/shop" className="btn-primary mt-8">
          Collection
        </Link>
      </div>
    );
  }

  const shipping = subtotal >= 75 ? 0 : 6;

  return (
    <div className="container-x py-12">
      <h1 className="display text-5xl">Your bag</h1>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <ul className="divide-y divide-line border-y border-line">
          {items.map((item) => {
            return (
              <li
                key={`${item.slug}-${item.size}`}
                className="flex flex-wrap items-center gap-5 py-6"
              >
                <ProductThumb
                  slug={item.slug}
                  word={item.word}
                  className="h-24 w-20 text-base"
                />

                <div className="min-w-0 flex-1">
                  <p className="text-[11px] uppercase tracking-wider2 text-ink-muted">
                    The reclaim tee
                  </p>
                  <p className="font-display font-bold capitalize">
                    “{item.word}”
                  </p>
                  <p className="text-sm text-ink-muted">
                    Size {item.size} · ${item.price}
                  </p>
                  <button
                    type="button"
                    onClick={() => removeItem(item.slug, item.size)}
                    className="mt-1 text-[11px] font-semibold uppercase tracking-wider2 underline underline-offset-4 hover:opacity-60"
                  >
                    Remove
                  </button>
                </div>

                <div className="flex items-center border border-line">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => updateQty(item.slug, item.size, item.qty - 1)}
                    className="px-3 py-2 text-lg leading-none hover:bg-bone"
                  >
                    –
                  </button>
                  <span className="w-8 text-center font-semibold">
                    {item.qty}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => updateQty(item.slug, item.size, item.qty + 1)}
                    className="px-3 py-2 text-lg leading-none hover:bg-bone"
                  >
                    +
                  </button>
                </div>

                <p className="w-16 text-right font-display font-bold">
                  ${item.qty * item.price}
                </p>
              </li>
            );
          })}
        </ul>

        <aside className="h-fit border border-line p-7">
          <h2 className="display text-2xl">Summary</h2>
          <dl className="mt-5 space-y-3 text-ink-muted">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd className="font-semibold text-ink">${subtotal}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Shipping</dt>
              <dd className="font-semibold text-ink">
                {shipping === 0 ? "Free" : `$${shipping}`}
              </dd>
            </div>
            {shipping > 0 && (
              <p className="text-xs text-blush-600">
                Add ${75 - subtotal} more for free shipping.
              </p>
            )}
          </dl>
          <div className="mt-5 flex justify-between border-t border-line pt-5">
            <span className="display text-xl">Total</span>
            <span className="display text-xl">${subtotal + shipping}</span>
          </div>
          <Link href="/checkout" className="btn-primary mt-6 w-full">
            Checkout
          </Link>
          <Link
            href="/shop"
            className="mt-3 block text-center text-[11px] font-semibold uppercase tracking-wider2 underline underline-offset-4 hover:opacity-60"
          >
            Keep shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
