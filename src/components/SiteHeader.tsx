"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
import { useUI } from "./UIContext";
import { BagIcon, CloseIcon, HeartIcon, MenuIcon, SearchIcon } from "./icons";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/story", label: "Our Story" },
  { href: "/deeper", label: "Go Deeper" },
  { href: "/wishlist", label: "Wishlist" },
];

export function SiteHeader() {
  const { count } = useCart();
  const { count: wishCount } = useWishlist();
  const { openCart } = useUI();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container-x flex h-[72px] items-center gap-4">
        {/* Left: script wordmark (kept) */}
        <Link
          href="/"
          className="word-mark shrink-0 text-3xl sm:text-4xl"
          onClick={() => setOpen(false)}
        >
          Giltees
        </Link>

        {/* Right: utility cluster */}
        <div className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link
            href="/shop"
            aria-label="Search"
            className="flex items-center gap-1.5 hover:opacity-60"
          >
            <SearchIcon className="h-[18px] w-[18px]" />
            <span className="hidden text-xs font-semibold uppercase tracking-wider2 underline decoration-1 underline-offset-[6px] sm:inline">
              Search
            </span>
          </Link>

          <Link
            href="/wishlist"
            aria-label={`Wishlist, ${wishCount} item${wishCount === 1 ? "" : "s"}`}
            className="relative hover:opacity-60"
          >
            <HeartIcon className="h-[22px] w-[22px]" filled={wishCount > 0} />
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
            <BagIcon className="h-[22px] w-[22px]" />
            {count > 0 && (
              <span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center bg-ink px-1 text-[10px] font-bold text-paper">
                {count}
              </span>
            )}
          </button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="hover:opacity-60"
          >
            {open ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Nav lives behind the menu at every breakpoint, matching the reference */}
      {open && (
        <nav className="border-t border-line bg-paper">
          <div className="container-x flex flex-col py-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border-b border-line py-4 text-sm font-semibold uppercase tracking-wider2 last:border-0 hover:opacity-60"
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
