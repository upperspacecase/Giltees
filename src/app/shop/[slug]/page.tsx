import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";
import { TeeMockup } from "@/components/TeeMockup";
import { AddToCart } from "@/components/AddToCart";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "Not found — Giltees" };
  return {
    title: `“${product.word}” — Giltees`,
    description: product.reclaim,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  return (
    <div className="container-x py-12">
      <Link
        href="/shop"
        className="text-sm font-semibold uppercase tracking-[0.16em] text-blush-600 hover:text-blush-700"
      >
        ← All words
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] shadow-soft">
          <TeeMockup product={product} />
        </div>

        <div>
          <p className="eyebrow">The reclaim tee</p>
          <h1 className="mt-2 word-mark text-6xl text-ink sm:text-7xl">
            {product.word}
          </h1>

          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-ink-muted">
            Shamed as
          </p>
          <p className="mt-1 text-lg text-ink">{product.shamedAs}</p>

          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            {product.reclaim}
          </p>

          <div className="mt-8 rounded-2xl border border-blush-200 bg-white p-6">
            <AddToCart product={product} />
          </div>
        </div>
      </div>

      {/* THE PRACTICE — ships with every word */}
      <section className="mt-14 grid gap-8 rounded-[2.5rem] bg-ink p-8 text-blush-50 sm:p-12 md:grid-cols-[auto_1fr] md:items-center">
        <div className="word-mark text-6xl text-blush-300">the practice</div>
        <div>
          <p className="eyebrow text-blush-300">Ships with your tee</p>
          <p className="mt-3 font-display text-2xl font-500 leading-snug">
            {product.practice}
          </p>
          <p className="mt-4 text-sm text-blush-100/70">
            A small card tucks into every order — the shirt is the outer work,
            this is the inner one. Want to go further?{" "}
            <Link href="/deeper" className="underline hover:text-white">
              Go deeper
            </Link>
            .
          </p>
        </div>
      </section>

      {/* MORE WORDS */}
      <section className="mt-16">
        <h2 className="font-display text-2xl font-700 text-ink">More words</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {products
            .filter((p) => p.slug !== product.slug)
            .map((p) => (
              <Link
                key={p.slug}
                href={`/shop/${p.slug}`}
                className="rounded-full border border-ink/20 px-4 py-2 font-display text-lg capitalize text-ink transition hover:border-ink hover:bg-ink hover:text-blush-50"
              >
                {p.word}
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
