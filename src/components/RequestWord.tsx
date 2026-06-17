"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "./icons";

type Variant = "footer" | "section";

// "Request your word" — customers suggest the word they were shamed by.
// No backend yet, so we persist suggestions locally and confirm warmly.
// Swap `persist` for a real POST when the API is ready.
export function RequestWord({ variant = "section" }: { variant?: Variant }) {
  const [word, setWord] = useState("");
  const [story, setStory] = useState("");
  const [done, setDone] = useState(false);

  function persist(entry: { word: string; story: string; at: string }) {
    try {
      const key = "giltees-word-requests";
      const prev = JSON.parse(localStorage.getItem(key) ?? "[]");
      localStorage.setItem(key, JSON.stringify([...prev, entry]));
    } catch {
      /* storage may be unavailable — submission still "succeeds" for the user */
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const w = word.trim();
    if (!w) return;
    persist({ word: w, story: story.trim(), at: new Date().toISOString() });
    setDone(true);
  }

  if (done) {
    return (
      <div className="border border-line bg-bone p-6 text-center">
        <p className="display text-2xl">“{word}” — received 🖤</p>
        <p className="mt-2 text-ink-muted">
          Thank you for trusting us with it. We read every one.
        </p>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <form onSubmit={onSubmit} className="flex">
        <input
          aria-label="Your word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="your word…"
          className="h-12 w-full border border-ink border-r-0 bg-paper px-4 text-sm placeholder:text-ink-muted focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Send your word"
          className="grid h-12 w-12 shrink-0 place-items-center bg-ink text-paper transition hover:bg-ink-soft"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-ink bg-paper p-6 sm:p-8">
      <label className="block">
        <span className="eyebrow">The word</span>
        <input
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="What were you called?"
          className="mt-2 h-12 w-full border border-line bg-bone px-4 font-display text-lg placeholder:text-ink-muted/60 focus:border-ink focus:outline-none"
        />
      </label>

      <label className="mt-5 block">
        <span className="eyebrow">Its story (optional)</span>
        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          rows={3}
          placeholder="Who used it, and what it cost you to carry it."
          className="mt-2 w-full border border-line bg-bone px-4 py-3 placeholder:text-ink-muted/60 focus:border-ink focus:outline-none"
        />
      </label>

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Request this word
      </button>
    </form>
  );
}
