"use client";

import Link from "next/link";
import { useState } from "react";
import { Newsletter } from "./Newsletter";
import { RequestWord } from "./RequestWord";
import { ChevronDown } from "./icons";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Help",
    links: [
      { label: "Shipping & returns", href: "/shop" },
      { label: "Size guide (XS–4XL)", href: "/shop" },
      { label: "Contact us", href: "mailto:hello@giltees.example" },
      { label: "FAQ", href: "/story" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Our story", href: "/story" },
      { label: "Go deeper — readings & therapists", href: "/deeper" },
      { label: "Request your word", href: "/shop#request" },
      { label: "Wishlist", href: "/wishlist" },
    ],
  },
];

function Accordion({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="display text-base">{title}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul className="space-y-3 pb-5">
          {links.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className="text-sm text-ink-muted hover:text-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const socials = ["Instagram", "TikTok", "YouTube", "Pinterest"];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      {/* Newsletter */}
      <section className="border-b border-line py-16">
        <div className="container-x">
          <Newsletter />
        </div>
      </section>

      {/* Request your word — our signature feature, kept */}
      <section className="border-b border-line bg-bone py-14">
        <div className="container-x grid items-center gap-8 md:grid-cols-[1fr_minmax(0,420px)]">
          <div>
            <p className="eyebrow">Don&apos;t see yours?</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl">
              Request your word
            </h2>
            <p className="mt-3 max-w-md text-ink-muted">
              Tell us the word that was used against you. Requested words shape
              every drop.
            </p>
          </div>
          <RequestWord variant="footer" />
        </div>
      </section>

      {/* Link columns — accordion on mobile, grid on desktop */}
      <div className="container-x py-12">
        <div className="md:hidden">
          {columns.map((c) => (
            <Accordion key={c.title} title={c.title} links={c.links} />
          ))}
        </div>

        <div className="hidden gap-12 md:grid md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="word-mark text-4xl">Giltees</p>
            <p className="mt-4 max-w-xs text-sm text-ink-muted">
              Shadow work you can wear. Take the word that was used against you
              and wear it out loud — until it&apos;s just a word again.
            </p>
            <p className="mt-6 eyebrow">For every body · every gender · XS–4XL</p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <h3 className="display text-base">{c.title}</h3>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink-muted hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Socials + legal */}
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="grid h-9 w-9 place-items-center border border-line text-[10px] font-bold uppercase tracking-wide hover:bg-ink hover:text-paper"
              >
                {s.slice(0, 2)}
              </a>
            ))}
          </div>
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} Giltees. Worn out loud.
          </p>
        </div>
      </div>
    </footer>
  );
}
