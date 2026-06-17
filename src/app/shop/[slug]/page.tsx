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
    <div className="container-x py-10">
      <Link
        href="/shop"
        className="link-underline text-xs uppercase tracking-wider2"
      >
        ← All words
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden">
          <TeeMockup product={product} />
        </div>

        <div className="md:py-4">
          <p className="eyebrow">The reclaim tee</p>
          <h1 className="word-mark mt-2 text-6xl sm:text-7xl">
            {product.word}
          </h1>
          <p className="mt-4 font-display text-lg font-bold">${product.price}</p>

          <p className="eyebrow mt-8">Shamed as</p>
          <p className="mt-1 text-lg">{product.shamedAs}</p>

          <p className="mt-5 leading-relaxed text-ink-muted">
            {product.reclaim}
          </p>

          <div className="mt-8 border-t border-line pt-8">
            <AddToCart product={product} />
          </div>
        </div>
      </div>

      {/* THE PRACTICE — ships with every word */}
      <section className="mt-16 bg-ink p-8 text-paper sm:p-14">
        <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
          <div className="word-mark text-5xl text-blush-300 sm:text-6xl">
            the practice
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest2 text-blush-300">
              Ships with your tee
            </p>
            <p className="mt-3 font-display text-2xl font-medium leading-snug">
              {product.practice}
            </p>
            <p className="mt-4 text-sm text-paper/70">
              A small card tucks into every order — the shirt is the outer work,
              this is the inner one. Want to go further?{" "}
              <Link href="/deeper" className="underline hover:text-white">
                Go deeper
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* MORE WORDS */}
      <section className="mt-16">
        <h2 className="display text-2xl">More words</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {products
            .filter((p) => p.slug !== product.slug)
            .map((p) => (
              <Link
                key={p.slug}
                href={`/shop/${p.slug}`}
                className="border border-line px-4 py-2 font-display font-semibold capitalize transition hover:border-ink hover:bg-ink hover:text-paper"
              >
                {p.word}
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
