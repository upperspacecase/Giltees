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
    <div className="container-x py-12">
      <header className="border-b border-line pb-8">
        <h1 className="display text-5xl sm:text-6xl">Shop the words</h1>
        <p className="mt-4 max-w-2xl text-ink-muted">
          Each tee names a word you were shamed by. Pick yours — it ships with a
          practice prompt to help you actually integrate it, not just style it.
        </p>
        <p className="eyebrow mt-3">
          Unisex · XS–4XL · soft combed cotton
        </p>
      </header>

      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>

      {/* REQUEST YOUR WORD */}
      <section
        id="request"
        className="mt-24 grid items-center gap-10 border-t border-line pt-16 md:grid-cols-2"
      >
        <div>
          <p className="eyebrow">Don&apos;t see yours?</p>
          <h2 className="display mt-3 text-4xl sm:text-5xl">
            Request your word
          </h2>
          <p className="mt-4 text-ink-muted">
            The line grows from you. Tell us the word that was used against you —
            and the story under it, if you want — and we may make it next.
            Requested words shape every drop.
          </p>
        </div>
        <RequestWord variant="section" />
      </section>
    </div>
  );
}
