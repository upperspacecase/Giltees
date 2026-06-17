import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Go Deeper — readings & therapists | Giltees",
  description:
    "The shirt is the start. Book a shadow-work or astrology reading, or find a vetted partner therapist to keep integrating.",
};

const readings = [
  {
    name: "Shadow-work session",
    duration: "60 min · video",
    price: 90,
    blurb:
      "A guided sit-down with your word. We trace where it came from, what it protected, and how to let it belong to you on purpose.",
    tone: "from-blush-500 to-ink",
  },
  {
    name: "Astrology + shadow reading",
    duration: "75 min · video",
    price: 120,
    blurb:
      "Your chart, read through the lens of the parts you were taught to hide. Where the shame lives, and the placements that help you reclaim it.",
    tone: "from-ink to-blush-600",
  },
  {
    name: "Word ritual (mini)",
    duration: "30 min · voice",
    price: 45,
    blurb:
      "Short and focused. Bring one word — yours or your new tee's — and leave with a practice tailored to it.",
    tone: "from-blush-400 to-blush-700",
  },
];

const therapists = [
  {
    name: "Dr. Maya Okafor, LCSW",
    focus: "Shame, identity & complex trauma",
    modality: "EMDR · IFS",
    location: "Remote · US / Canada",
  },
  {
    name: "Jordan Reyes, LMFT",
    focus: "Relationships & boundary repair",
    modality: "Gottman · attachment-based",
    location: "Remote · all genders welcome",
  },
  {
    name: "Sam Beaumont, LPC",
    focus: "Men's emotional integration",
    modality: "Somatic · parts work",
    location: "Remote · evenings available",
  },
  {
    name: "Priya Nair, Psychotherapist",
    focus: "Family-of-origin & cultural shame",
    modality: "Psychodynamic · narrative",
    location: "Remote · sliding scale",
  },
];

export default function DeeperPage() {
  return (
    <div>
      {/* HERO */}
      <section className="border-b border-line py-20 text-center">
        <div className="container-x">
          <p className="eyebrow">Go deeper</p>
          <h1 className="display mx-auto mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl">
            The shirt starts it. This is where you keep going
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-ink-muted">
            Wearing the word cracks it open. If you want to actually integrate
            what&apos;s underneath, sit with someone. Book a reading, or find a
            vetted partner therapist — no shame, all genders, your pace.
          </p>
        </div>
      </section>

      {/* READINGS */}
      <section className="container-x py-16">
        <h2 className="display text-3xl sm:text-4xl">Readings &amp; rituals</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {readings.map((r) => (
            <div
              key={r.name}
              className="flex flex-col border border-line"
            >
              <div
                className={`flex h-28 items-center justify-center bg-gradient-to-br ${r.tone}`}
              >
                <span className="word-mark text-3xl text-paper">go deeper</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="display text-lg">{r.name}</h3>
                <p className="eyebrow mt-1">{r.duration}</p>
                <p className="mt-3 flex-1 text-sm text-ink-muted">{r.blurb}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="display text-xl">${r.price}</span>
                  <Link href="/deeper#book" className="btn-primary !px-6 !py-3">
                    Book
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THERAPIST DIRECTORY */}
      <section className="container-x pb-16">
        <div className="border-t border-line pt-16">
          <h2 className="display text-3xl sm:text-4xl">
            Partner therapist directory
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Hand-picked, shame-informed practitioners who get the work. Every one
            welcomes all genders. Readings are a doorway — therapy is the room.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {therapists.map((t) => (
              <div key={t.name} className="border border-line p-6">
                <h3 className="display text-lg">{t.name}</h3>
                <p className="mt-1 text-sm">{t.focus}</p>
                <p className="eyebrow mt-3">{t.modality}</p>
                <p className="mt-1 text-sm text-ink-muted">{t.location}</p>
                <Link
                  href="/deeper#book"
                  className="link-underline mt-4 inline-block text-xs uppercase tracking-wider2"
                >
                  Request intro →
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink-muted">
            Are you a practitioner who wants to join the directory?{" "}
            <Link href="/deeper#book" className="underline">
              Apply to partner with Giltees
            </Link>
            .
          </p>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section id="book" className="container-x pb-24">
        <div className="bg-ink px-8 py-16 text-center text-paper sm:px-16">
          <p className="text-[11px] font-semibold uppercase tracking-widest2 text-blush-300">
            Ready when you are
          </p>
          <h2 className="display mx-auto mt-3 max-w-xl text-3xl sm:text-4xl">
            Reach out and we&apos;ll match you to a reading or a therapist
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-paper/80">
            Tell us your word and what you&apos;re carrying. We&apos;ll route you
            to the right person — gently, and at your pace.
          </p>
          <a
            href="mailto:hello@giltees.example?subject=Going%20deeper"
            className="btn mt-8 bg-paper text-ink hover:bg-bone"
          >
            Start the conversation
          </a>
        </div>
      </section>
    </div>
  );
}
