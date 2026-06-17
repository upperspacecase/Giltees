import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <>
      {/* HERO — leads with the word "crazy" */}
      <section className="relative overflow-hidden bg-blush-50">
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-blush-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-blush-300/40 blur-3xl" />

        <div className="container-x relative grid items-center gap-10 py-20 md:grid-cols-2 md:py-28">
          <div className="animate-rise">
            <p className="eyebrow">Shadow work you can wear</p>
            <h1 className="mt-4 text-ink">
              <span className="block font-display text-2xl font-500 sm:text-3xl">
                They called you
              </span>
              <span className="word-mark mt-1 block text-7xl text-blush-600 sm:text-8xl md:text-[8.5rem]">
                crazy
              </span>
              <span className="mt-3 block font-display text-2xl font-500 sm:text-3xl">
                so wear it out loud.
              </span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-ink-muted">
              Giltees takes the words we&apos;ve been shamed by —{" "}
              <em>crazy, toxic, bitch, fake, poor</em> — and turns each one into
              something owned instead of hidden. Soft fonts. Pink and black.
              Zero apology.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-pink">
                Shop the words
              </Link>
              <Link href="/story" className="btn-outline">
                Why we do this
              </Link>
            </div>
          </div>

          <div className="relative animate-rise [animation-delay:120ms]">
            <div className="mx-auto flex aspect-square max-w-md items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-blush-500 to-ink shadow-soft">
              <span className="word-mark animate-floaty text-[5.5rem] text-blush-50 drop-shadow-md sm:text-[7rem]">
                crazy
              </span>
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink shadow-soft">
              until it&apos;s just a word again
            </div>
          </div>
        </div>
      </section>

      {/* THE PRACTICE — the brand's core idea */}
      <section className="container-x py-20">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Name it",
              d: "Pick the word that was used to make you smaller. The one that still flinches when you say it.",
            },
            {
              n: "02",
              t: "Wear it",
              d: "Put it on your chest in a soft, playful font. Repetition drains the charge out of a word.",
            },
            {
              n: "03",
              t: "Integrate it",
              d: "Each tee ships with a short shadow-work practice — so the shirt does inner work, not just outer.",
            },
          ].map((step) => (
            <div
              key={step.n}
              className="rounded-3xl border border-blush-200 bg-white p-7 shadow-sm"
            >
              <span className="word-mark text-3xl text-blush-400">
                {step.n}
              </span>
              <h3 className="mt-3 font-display text-2xl font-600 text-ink">
                {step.t}
              </h3>
              <p className="mt-2 text-ink-muted">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED WORDS */}
      <section className="container-x pb-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">The line</p>
            <h2 className="mt-2 font-display text-4xl font-700 text-ink">
              Words, reclaimed
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden text-sm font-semibold uppercase tracking-[0.16em] text-blush-600 hover:text-blush-700 sm:block"
          >
            See all →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link href="/shop" className="btn-outline">
            See all words
          </Link>
        </div>
      </section>

      {/* INCLUSIVE NOTE — built to welcome all genders */}
      <section className="container-x py-20">
        <div className="overflow-hidden rounded-[2.5rem] bg-ink px-8 py-14 text-center text-blush-50 sm:px-16">
          <p className="eyebrow text-blush-300">For every body</p>
          <p className="mx-auto mt-4 max-w-2xl font-display text-2xl font-500 leading-snug sm:text-3xl">
            Shame isn&apos;t gendered, and neither are we. Every fit is unisex,
            XS–4XL — with a men&apos;s line and real photography of diverse
            people on the way.
          </p>
          <Link href="/deeper" className="btn-pink mt-8">
            Go deeper into the work
          </Link>
        </div>
      </section>
    </>
  );
}
