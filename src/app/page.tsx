import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { TeeMockup } from "@/components/TeeMockup";

// Hero is driven by one config — swap `image`/`headline` to re-shoot the hero.
const hero = {
  image: "/images/products/crazy.png",
  headline: "Shadow work you can wear",
  subhead:
    "Taking the words we've been shamed by and reclaiming them. That's real retail therapy.",
};

export default function HomePage() {
  // Words shown as the labeled tile grid below the hero.
  const tiles = products.slice(0, 6);

  return (
    <>
      {/*
        FULL-BLEED HERO — a single editorial image with the header floating over
        it. The gradient is a PLACEHOLDER: drop a real hero photograph in here
        (e.g. next/image fill) and keep the bottom scrim + text block.
        The negative top margin pulls the image up under the transparent header.
      */}
      <section className="relative -mt-[72px] h-[92svh] min-h-[560px] w-full overflow-hidden">
        <Image
          src={hero.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* scrim for text legibility, like the reference's darker lower third */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/5" />

        <div className="container-x relative flex h-full flex-col justify-end pb-12 text-paper sm:pb-16">
          <h1 className="display max-w-2xl text-4xl sm:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-3 max-w-md text-paper/90">{hero.subhead}</p>
          <Link
            href="/shop"
            className="mt-4 inline-block w-fit text-sm font-semibold uppercase tracking-wider2 underline decoration-1 underline-offset-[6px] hover:opacity-70"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* LANDING TILE GRID — two columns, bold uppercase label under each image */}
      <section className="container-x py-10 sm:py-14">
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {tiles.map((p) => (
            <Link key={p.slug} href={`/shop/${p.slug}`} className="group block">
              <div className="overflow-hidden">
                <TeeMockup
                  product={p}
                  className="aspect-[4/5] transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h2 className="display mt-2 text-lg sm:text-2xl">{p.word}</h2>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/shop" className="btn-outline">
            Collection
          </Link>
        </div>
      </section>

      {/* SPOTLIGHT — the practice (kept wording) */}
      <section className="bg-ink text-paper">
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

      {/* VALUE PROPS */}
      <section className="border-b border-line">
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
