"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
import { useUI } from "./UIContext";
import { BagIcon, CloseIcon, HeartIcon, MenuIcon, SearchIcon } from "./icons";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/story", label: "Our Story" },
  { href: "/deeper", label: "Go Deeper" },
];

export function SiteHeader() {
  const { count } = useCart();
  const { count: wishCount } = useWishlist();
  const { openCart } = useUI();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        {/* Left: menu (mobile) + nav (desktop) */}
        <div className="flex flex-1 items-center gap-6">
          <button
            type="button"
            className="md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-xs font-semibold uppercase tracking-wider2 transition hover:opacity-60 ${
                  pathname.startsWith(l.href) ? "underline underline-offset-4" : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center: script wordmark (kept) */}
        <Link
          href="/"
          className="word-mark shrink-0 text-3xl sm:text-4xl"
          onClick={() => setOpen(false)}
        >
          Giltees
        </Link>

        {/* Right: utility icons */}
        <div className="flex flex-1 items-center justify-end gap-4 sm:gap-5">
          <Link
            href="/shop"
            aria-label="Search"
            className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-wider2 hover:opacity-60 sm:flex"
          >
            <SearchIcon className="h-5 w-5" />
            <span className="hidden lg:inline">Search</span>
          </Link>

          <Link
            href="/wishlist"
            aria-label={`Wishlist, ${wishCount} item${wishCount === 1 ? "" : "s"}`}
            className="relative hover:opacity-60"
          >
            <HeartIcon className="h-6 w-6" filled={wishCount > 0} />
            {wishCount > 0 && (
              <span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center bg-blush-500 px-1 text-[10px] font-bold text-white">
                {wishCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={openCart}
            aria-label={`Open bag, ${count} item${count === 1 ? "" : "s"}`}
            className="relative hover:opacity-60"
          >
            <BagIcon className="h-6 w-6" />
            {count > 0 && (
              <span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center bg-ink px-1 text-[10px] font-bold text-paper">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-line bg-paper md:hidden">
          <div className="container-x flex flex-col py-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border-b border-line py-4 text-sm font-semibold uppercase tracking-wider2 last:border-0"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/wishlist"
              className="py-4 text-sm font-semibold uppercase tracking-wider2"
              onClick={() => setOpen(false)}
            >
              Wishlist
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
