import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { TeeMockup } from "@/components/TeeMockup";

export default function HomePage() {
  const featured = products.slice(0, 4);
  const tiles = products.slice(0, 2);

  return (
    <>
      {/* FULL-BLEED HERO — leads with the word "crazy" */}
      <section className="relative">
        <div className="relative flex min-h-[78vh] items-end overflow-hidden bg-gradient-to-br from-blush-400 via-blush-500 to-ink">
          <span className="word-mark pointer-events-none absolute right-4 top-1/4 select-none text-[28vw] leading-none text-white/10 sm:right-16 sm:text-[18vw]">
            crazy
          </span>

          <div className="container-x relative z-10 pb-14 pt-24 text-paper">
            <p className="text-[11px] font-semibold uppercase tracking-widest2 text-paper/80">
              Shadow work you can wear
            </p>
            <h1 className="display mt-3 max-w-3xl text-5xl sm:text-7xl">
              They called you{" "}
              <span className="word-mark lowercase tracking-normal">crazy</span>
              <br />
              so wear it out loud.
            </h1>
            <p className="mt-5 max-w-md text-paper/85">
              We take the words we&apos;ve been shamed by — crazy, toxic, bitch,
              fake, poor — and turn each one into something owned instead of
              hidden.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="btn bg-paper text-ink hover:bg-bone"
              >
                Shop the words
              </Link>
              <Link
                href="/story"
                className="btn border border-paper text-paper hover:bg-paper hover:text-ink"
              >
                Why we do this
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WORD TILES — editorial two-up */}
      <section className="container-x py-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {tiles.map((p) => (
            <Link key={p.slug} href={`/shop/${p.slug}`} className="group block">
              <div className="overflow-hidden">
                <TeeMockup
                  product={p}
                  className="aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h2 className="display mt-3 text-2xl capitalize">“{p.word}”</h2>
              <p className="link-underline mt-1 inline-block text-xs uppercase tracking-wider2">
                Shop now
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* SPOTLIGHT — keeps our practice wording in the reference's spotlight format */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="container-x grid gap-10 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest2 text-blush-300">
              The practice
            </p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">
              A shirt that does the inner work too
            </h2>
            <p className="mt-4 max-w-md text-paper/80">
              Repetition drains the charge out of a word. Each tee ships with a
              short shadow-work prompt — so you don&apos;t just style the word,
              you integrate it.
            </p>
            <Link
              href="/deeper"
              className="btn mt-7 bg-paper text-ink hover:bg-bone"
            >
              Go deeper into the work
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { n: "01", t: "Name it" },
              { n: "02", t: "Wear it" },
              { n: "03", t: "Integrate it" },
            ].map((s) => (
              <div key={s.n} className="border border-white/15 p-5">
                <span className="word-mark text-3xl text-blush-300">{s.n}</span>
                <p className="display mt-2 text-lg">{s.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING RAIL */}
      <section className="container-x py-16">
        <div className="flex items-end justify-between">
          <h2 className="display text-3xl sm:text-4xl">Words, reclaimed</h2>
          <Link
            href="/shop"
            className="link-underline text-xs uppercase tracking-wider2"
          >
            See all
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* VALUE PROPS — icon row */}
      <section className="border-y border-line">
        <div className="container-x grid grid-cols-2 divide-x divide-line text-center md:grid-cols-4">
          {[
            ["Ships in 1–5 days", "Soft combed cotton"],
            ["Free shipping over $75", "Easy 30-day returns"],
            ["Every body · XS–4XL", "All genders welcome"],
            ["A practice card with every tee", "Worn out loud"],
          ].map(([a, b], i) => (
            <div key={i} className="px-4 py-8">
              <p className="display text-sm">{a}</p>
              <p className="mt-1 text-xs text-ink-muted">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ALL GENDERS */}
      <section className="container-x py-20 text-center">
        <p className="eyebrow">For every body</p>
        <p className="display mx-auto mt-4 max-w-3xl text-3xl sm:text-4xl">
          Shame isn&apos;t gendered, and neither are we
        </p>
        <p className="mx-auto mt-4 max-w-xl text-ink-muted">
          Every fit is unisex, XS–4XL — with a men&apos;s line and real
          photography of diverse people on the way.
        </p>
        <Link href="/shop" className="btn-primary mt-8">
          Find your word
        </Link>
      </section>
    </>
  );
}
