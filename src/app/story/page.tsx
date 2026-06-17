import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story — Giltees",
  description:
    "The philosophy behind Giltees: reclaiming the words we were shamed by as shadow work you can wear — and the founder's journey that started it.",
};

export default function StoryPage() {
  return (
    <div className="bg-blush-50">
      {/* MANIFESTO HERO */}
      <section className="container-x py-20 text-center">
        <p className="eyebrow">The manifesto</p>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-700 leading-tight text-ink sm:text-5xl">
          A word only has the power you let it keep in the dark.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted">
          Giltees began with a simple, stubborn idea: the words used to shame us
          — <em>crazy, toxic, bitch, fake, poor</em> — only sting while
          they&apos;re hidden. Say them, wear them, repeat them until they go
          soft in your mouth, and they stop running the show.
        </p>
      </section>

      {/* THE PHILOSOPHY */}
      <section className="container-x grid gap-12 pb-20 md:grid-cols-2">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm">
          <h2 className="word-mark text-4xl text-blush-600">shadow work</h2>
          <p className="mt-4 text-ink-muted">
            In Jungian terms, the &quot;shadow&quot; is everything we&apos;ve
            disowned — the traits we buried because someone made them dangerous
            to show. Integration isn&apos;t fixing those parts. It&apos;s
            bringing them back into the light and letting them belong to you
            again.
          </p>
          <p className="mt-4 text-ink-muted">
            A Giltee is the smallest possible ritual for that work. You take the
            label, print it where everyone can read it, and walk out the door.
            The discomfort you feel the first time is the charge leaving the
            word.
          </p>
        </div>
        <div className="rounded-[2rem] bg-ink p-8 text-blush-50 shadow-soft">
          <h2 className="word-mark text-4xl text-blush-300">
            you can wear
          </h2>
          <p className="mt-4 text-blush-100/85">
            Therapy happens in a room once a week. Your clothes are with you all
            day. We wanted the work to be wearable — playful, soft, a little
            funny — so it doesn&apos;t feel like punishment.
          </p>
          <p className="mt-4 text-blush-100/85">
            That&apos;s why every word is set in a gentle, rounded font on
            pink-and-black. Heavy idea, light touch. The lightness is the point:
            you&apos;re allowed to heal without it being grim.
          </p>
        </div>
      </section>

      {/* FOUNDER JOURNEY */}
      <section className="container-x pb-20">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">How it started</p>
          <h2 className="mt-3 font-display text-4xl font-700 text-ink">
            The founder&apos;s word was &quot;crazy.&quot;
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-muted">
            <p>
              For years it was the word that followed me through every room I
              felt too much in. Cry at the wrong moment — crazy. Ask one
              question too many — crazy. Feel a thing loudly and refuse to make
              it smaller — crazy. Eventually I started saying it about myself
              before anyone else could, just to get there first.
            </p>
            <p>
              The turn came in a secondhand journal during a long, unglamorous
              season of doing the work. I wrote the word at the top of a page
              and made myself answer it: <em>what actually happened</em> every
              time I was called this? Almost always, I&apos;d simply reacted to
              something real that someone needed me not to notice.
            </p>
            <p>
              So I printed &quot;crazy&quot; on a shirt and wore it to the
              grocery store. Strangers smiled. One woman stopped me and quietly
              said, <em>&quot;me too.&quot;</em> That was the whole business
              plan: a word, worn out loud, turning shame into a conversation.
            </p>
            <p className="font-display text-xl font-600 text-ink">
              Giltees is that journal page, made wearable — and made for
              everyone, of every gender, who was ever told they were too much of
              the wrong thing.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-blush-200 bg-white p-7">
            <p className="text-ink-muted">
              We&apos;re early, and on purpose. The look will keep softening
              toward something more organic and gender-neutral, and soon
              you&apos;ll see real, diverse people wearing these pieces — not
              mockups. A men&apos;s line is coming. The practice stays the same.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-pink">
                Find your word
              </Link>
              <Link href="/deeper" className="btn-outline">
                Go deeper
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
