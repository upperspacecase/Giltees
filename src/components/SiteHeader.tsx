"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "./CartContext";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/story", label: "Our Story" },
  { href: "/deeper", label: "Go Deeper" },
];

export function SiteHeader() {
  const { count } = useCart();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-blush-50/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="word-mark text-3xl text-ink transition hover:text-blush-600"
          onClick={() => setOpen(false)}
        >
          Giltees
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold uppercase tracking-[0.16em] transition hover:text-blush-600 ${
                pathname.startsWith(l.href) ? "text-blush-600" : "text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/cart"
            className="relative rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-ink transition hover:border-ink hover:bg-ink hover:text-blush-50"
            aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
          >
            Cart
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-blush-500 px-1.5 text-xs font-bold text-white">
                {count}
              </span>
            )}
          </Link>

          <button
            type="button"
            className="rounded-full border border-ink/20 p-2 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="mt-1 block h-0.5 w-5 bg-ink" />
            <span className="mt-1 block h-0.5 w-5 bg-ink" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-ink/10 bg-blush-50 md:hidden">
          <div className="container-x flex flex-col py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-2 text-sm font-semibold uppercase tracking-[0.16em] text-ink"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
