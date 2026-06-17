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
    // Drop in Stripe / Shopify Checkout here and POST the cart.
    setPlaced(true);
    clear();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (placed) {
    return (
      <div className="container-x py-24 text-center">
        <p className="word-mark text-6xl text-blush-600">worn out loud</p>
        <p className="mx-auto mt-5 max-w-md text-ink-muted">
          Order received. Your words — and the practice cards that ship with
          them — are on the way. The rest is integration.
        </p>
        <Link href="/shop" className="btn-primary mt-8">
          Reclaim another
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container-x py-24 text-center">
        <h1 className="display text-4xl">Nothing to check out</h1>
        <Link href="/shop" className="btn-primary mt-8">
          Shop the words
        </Link>
      </div>
    );
  }

  const field =
    "mt-1 h-12 w-full border border-line bg-paper px-4 placeholder:text-ink-muted/60 focus:border-ink focus:outline-none";

  return (
    <div className="container-x py-12">
      <h1 className="display text-5xl">Checkout</h1>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <form onSubmit={onSubmit} className="space-y-10">
          <fieldset>
            <legend className="display text-lg">Contact</legend>
            <label className="mt-3 block text-sm font-semibold">
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
            <legend className="display text-lg">Ship to</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <label className="block text-sm font-semibold">
                Full name
                <input required placeholder="Your name" className={field} />
              </label>
              <label className="block text-sm font-semibold">
                Phone (optional)
                <input placeholder="Phone" className={field} />
              </label>
              <label className="block text-sm font-semibold sm:col-span-2">
                Address
                <input required placeholder="Street address" className={field} />
              </label>
              <label className="block text-sm font-semibold">
                City
                <input required placeholder="City" className={field} />
              </label>
              <label className="block text-sm font-semibold">
                Postal code
                <input required placeholder="ZIP / Postal" className={field} />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend className="display text-lg">Payment</legend>
            <p className="mt-2 text-sm text-ink-muted">
              This is a demo storefront — no card is charged. Wire up Stripe or
              Shopify Checkout here to go live.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <label className="block text-sm font-semibold sm:col-span-2">
                Card number
                <input
                  placeholder="4242 4242 4242 4242"
                  className={field}
                  inputMode="numeric"
                />
              </label>
              <label className="block text-sm font-semibold">
                Expiry
                <input placeholder="MM / YY" className={field} />
              </label>
              <label className="block text-sm font-semibold">
                CVC
                <input placeholder="CVC" className={field} inputMode="numeric" />
              </label>
            </div>
          </fieldset>

          <button type="submit" className="btn-primary w-full sm:w-auto">
            Place order — ${subtotal + shipping}
          </button>
        </form>

        <aside className="h-fit border border-line p-7">
          <h2 className="display text-2xl">Your order</h2>
          <ul className="mt-5 space-y-3">
            {items.map((i) => (
              <li
                key={`${i.slug}-${i.size}`}
                className="flex justify-between gap-3 text-sm"
              >
                <span>
                  “{i.word}” · {i.size} × {i.qty}
                </span>
                <span className="font-semibold">${i.qty * i.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 space-y-2 border-t border-line pt-5 text-sm text-ink-muted">
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
            <div className="flex justify-between border-t border-line pt-3 display text-lg text-ink">
              <span>Total</span>
              <span>${subtotal + shipping}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
