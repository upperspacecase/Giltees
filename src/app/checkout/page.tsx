"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [placed, setPlaced] = useState(false);
  const shipping = subtotal >= 75 ? 0 : 6;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    // Demo checkout — no payment processor wired up yet.
    // Drop in Stripe/Shopify here and POST the cart.
    setPlaced(true);
    clear();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (placed) {
    return (
      <div className="container-x py-24 text-center">
        <p className="word-mark text-6xl text-blush-600">worn out loud</p>
        <p className="mx-auto mt-5 max-w-md text-lg text-ink-muted">
          Order received. Your words — and the practice cards that ship with
          them — are on the way. The rest is integration.
        </p>
        <Link href="/shop" className="btn-pink mt-8">
          Reclaim another
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container-x py-24 text-center">
        <p className="word-mark text-5xl text-blush-400">nothing to check out</p>
        <Link href="/shop" className="btn-pink mt-8">
          Shop the words
        </Link>
      </div>
    );
  }

  const field =
    "mt-1 w-full rounded-2xl border border-blush-200 bg-white px-4 py-3 text-ink placeholder:text-ink/30 focus:border-blush-400 focus:outline-none";

  return (
    <div className="container-x py-16">
      <h1 className="font-display text-5xl font-700 text-ink">Checkout</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <form onSubmit={onSubmit} className="space-y-8">
          <fieldset>
            <legend className="eyebrow">Contact</legend>
            <label className="mt-3 block text-sm font-semibold text-ink">
              Email
              <input
                required
                type="email"
                placeholder="you@email.com"
                className={field}
              />
            </label>
          </fieldset>

          <fieldset>
            <legend className="eyebrow">Ship to</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-ink">
                Full name
                <input required placeholder="Your name" className={field} />
              </label>
              <label className="block text-sm font-semibold text-ink">
                Phone (optional)
                <input placeholder="Phone" className={field} />
              </label>
              <label className="block text-sm font-semibold text-ink sm:col-span-2">
                Address
                <input required placeholder="Street address" className={field} />
              </label>
              <label className="block text-sm font-semibold text-ink">
                City
                <input required placeholder="City" className={field} />
              </label>
              <label className="block text-sm font-semibold text-ink">
                Postal code
                <input required placeholder="ZIP / Postal" className={field} />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend className="eyebrow">Payment</legend>
            <p className="mt-2 text-sm text-ink-muted">
              This is a demo storefront — no card is charged. Wire up Stripe or
              Shopify Checkout here to go live.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-ink sm:col-span-2">
                Card number
                <input
                  placeholder="4242 4242 4242 4242"
                  className={field}
                  inputMode="numeric"
                />
              </label>
              <label className="block text-sm font-semibold text-ink">
                Expiry
                <input placeholder="MM / YY" className={field} />
              </label>
              <label className="block text-sm font-semibold text-ink">
                CVC
                <input placeholder="CVC" className={field} inputMode="numeric" />
              </label>
            </div>
          </fieldset>

          <button type="submit" className="btn-pink w-full sm:w-auto">
            Place order — ${subtotal + shipping}
          </button>
        </form>

        <aside className="h-fit rounded-3xl border border-blush-200 bg-white p-7 shadow-soft">
          <h2 className="font-display text-2xl font-700 text-ink">
            Your order
          </h2>
          <ul className="mt-5 space-y-3">
            {items.map((i) => (
              <li
                key={`${i.slug}-${i.size}`}
                className="flex justify-between gap-3 text-sm"
              >
                <span className="text-ink">
                  “{i.word}” · {i.size} × {i.qty}
                </span>
                <span className="font-semibold text-ink">
                  ${i.qty * i.price}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-5 space-y-2 border-t border-blush-200 pt-5 text-sm text-ink-muted">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-ink">${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-semibold text-ink">
                {shipping === 0 ? "Free" : `$${shipping}`}
              </span>
            </div>
            <div className="flex justify-between border-t border-blush-200 pt-3 font-display text-lg font-700 text-ink">
              <span>Total</span>
              <span>${subtotal + shipping}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
