"use client";

import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function CartPage() {
  const { items, subtotal, updateQty, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="container-x py-24 text-center">
        <p className="word-mark text-5xl text-blush-400">empty for now</p>
        <p className="mt-4 text-ink-muted">
          Nothing reclaimed yet. Find the word that was used against you.
        </p>
        <Link href="/shop" className="btn-pink mt-8">
          Shop the words
        </Link>
      </div>
    );
  }

  const shipping = subtotal >= 75 ? 0 : 6;

  return (
    <div className="container-x py-16">
      <h1 className="font-display text-5xl font-700 text-ink">Your cart</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={`${item.slug}-${item.size}`}
              className="flex flex-wrap items-center gap-4 rounded-3xl border border-blush-200 bg-white p-5"
            >
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blush-500 to-ink">
                <span className="word-mark text-lg text-blush-50">
                  {item.word}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-display text-xl font-600 capitalize text-ink">
                  “{item.word}”
                </p>
                <p className="text-sm text-ink-muted">
                  Size {item.size} · ${item.price}
                </p>
                <button
                  type="button"
                  onClick={() => removeItem(item.slug, item.size)}
                  className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-blush-600 hover:text-blush-700"
                >
                  Remove
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => updateQty(item.slug, item.size, item.qty - 1)}
                  className="h-9 w-9 rounded-full border border-ink/20 text-lg leading-none text-ink hover:border-ink"
                >
                  –
                </button>
                <span className="w-6 text-center font-semibold">
                  {item.qty}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => updateQty(item.slug, item.size, item.qty + 1)}
                  className="h-9 w-9 rounded-full border border-ink/20 text-lg leading-none text-ink hover:border-ink"
                >
                  +
                </button>
              </div>

              <p className="w-16 text-right font-display text-lg font-600 text-ink">
                ${item.qty * item.price}
              </p>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-3xl border border-blush-200 bg-white p-7 shadow-soft">
          <h2 className="font-display text-2xl font-700 text-ink">Summary</h2>
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
          <div className="mt-5 flex justify-between border-t border-blush-200 pt-5">
            <span className="font-display text-xl font-700 text-ink">Total</span>
            <span className="font-display text-xl font-700 text-ink">
              ${subtotal + shipping}
            </span>
          </div>
          <Link href="/checkout" className="btn-pink mt-6 w-full">
            Checkout
          </Link>
          <Link
            href="/shop"
            className="mt-3 block text-center text-sm font-semibold text-blush-600 hover:text-blush-700"
          >
            Keep shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
