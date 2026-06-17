import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Go Deeper — therapists & integration practices | Giltees",
  description:
    "A marketplace of vetted therapists and integration practices. The shirt starts the work; here's where you keep going — shadow work, astrology, ritual, and care.",
};

// Integration practices offered through the marketplace. No prices — each
// practitioner sets their own; visitors enquire and get matched.
const practices = [
  {
    name: "Shadow-work session",
    format: "Guided 1:1 · video",
    blurb:
      "A guided sit-down with your word. Trace where it came from, what it protected, and how to let it belong to you on purpose.",
    tone: "from-blush-500 to-ink",
  },
  {
    name: "Astrology + shadow reading",
    format: "Chart reading · video",
    blurb:
      "Your chart, read through the lens of the parts you were taught to hide. Where the shame lives, and the placements that help you reclaim it.",
    tone: "from-ink to-blush-600",
  },
  {
    name: "Word ritual",
    format: "Focused practice · voice or video",
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
          <p className="eyebrow">Go deeper — the marketplace</p>
          <h1 className="display mx-auto mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl">
            Therapists &amp; integration practices, in one place
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-ink-muted">
            The shirt starts the work. This is where you keep going — a curated
            marketplace of vetted therapists and integration practices.
            No shame, all genders, your pace. Browse, then enquire and we&apos;ll
            match you.
          </p>
        </div>
      </section>

      {/* INTEGRATION PRACTICES */}
      <section className="container-x py-16">
        <h2 className="display text-3xl sm:text-4xl">Integration practices</h2>
        <p className="mt-3 max-w-2xl text-ink-muted">
          Ways to sit with your word, offered by practitioners across the
          marketplace. Each one sets their own rates — enquire to be matched.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {practices.map((p) => (
            <div key={p.name} className="flex flex-col border border-line">
              <div
                className={`flex h-28 items-center justify-center bg-gradient-to-br ${p.tone}`}
              >
                <span className="word-mark text-3xl text-paper">go deeper</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="display text-lg">{p.name}</h3>
                <p className="eyebrow mt-1">{p.format}</p>
                <p className="mt-3 flex-1 text-sm text-ink-muted">{p.blurb}</p>
                <Link
                  href="/deeper#connect"
                  className="btn-outline mt-5 w-full"
                >
                  Enquire
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THERAPIST DIRECTORY */}
      <section className="container-x pb-16">
        <div className="border-t border-line pt-16">
          <h2 className="display text-3xl sm:text-4xl">
            Partner therapists
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Hand-picked, shame-informed practitioners who get the work. Every one
            welcomes all genders. Practices are a doorway — therapy is the room.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {therapists.map((t) => (
              <div key={t.name} className="border border-line p-6">
                <h3 className="display text-lg">{t.name}</h3>
                <p className="mt-1 text-sm">{t.focus}</p>
                <p className="eyebrow mt-3">{t.modality}</p>
                <p className="mt-1 text-sm text-ink-muted">{t.location}</p>
                <Link
                  href="/deeper#connect"
                  className="link-underline mt-4 inline-block text-xs uppercase tracking-wider2"
                >
                  Request intro →
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink-muted">
            Are you a therapist or practitioner who wants to join the
            marketplace?{" "}
            <Link href="/deeper#connect" className="underline">
              Apply to partner with Giltees
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CONNECT CTA */}
      <section id="connect" className="container-x pb-24">
        <div className="bg-ink px-8 py-16 text-center text-paper sm:px-16">
          <p className="text-[11px] font-semibold uppercase tracking-widest2 text-blush-300">
            Ready when you are
          </p>
          <h2 className="display mx-auto mt-3 max-w-xl text-3xl sm:text-4xl">
            Tell us your word and we&apos;ll match you
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-paper/80">
            Share what you&apos;re carrying and we&apos;ll connect you with the
            right practitioner or therapist — gently, and at your pace.
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
