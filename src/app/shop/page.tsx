import type { Metadata } from "next";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { RequestWord } from "@/components/RequestWord";

export const metadata: Metadata = {
  title: "Shop — Giltees",
  description:
    "The full line of reclaim tees. Every fit unisex, XS–4XL. Each shirt ships with a short shadow-work practice.",
};

export default function ShopPage() {
  return (
    <div className="container-x py-16">
      <header className="max-w-2xl">
        <p className="eyebrow">The line</p>
        <h1 className="mt-3 font-display text-5xl font-700 text-ink">
          Wear the word
        </h1>
        <p className="mt-4 text-lg text-ink-muted">
          Each tee names a word you were shamed by, in a soft and playful font.
          Pick yours. It ships with a practice prompt to help you actually
          integrate it — not just style it.
        </p>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-blush-600">
          Unisex · XS–4XL · soft combed cotton
        </p>
      </header>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>

      {/* REQUEST YOUR WORD */}
      <section className="mt-24 grid items-center gap-10 rounded-[2.5rem] bg-blush-100 p-8 sm:p-12 md:grid-cols-2">
        <div>
          <p className="eyebrow">Don&apos;t see yours?</p>
          <h2 className="mt-3 font-display text-4xl font-700 text-ink">
            Request your word
          </h2>
          <p className="mt-4 text-ink-muted">
            The line grows from you. Tell us the word that was used against you
            — and the story under it, if you want — and we may make it next.
            Requested words shape every drop.
          </p>
        </div>
        <RequestWord variant="section" />
      </section>
    </div>
  );
}
