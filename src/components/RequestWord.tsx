"use client";

import { useState, type FormEvent } from "react";

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
      <div
        className={
          variant === "footer"
            ? "rounded-2xl border border-blush-300/30 bg-white/5 p-4"
            : "rounded-3xl border border-blush-200 bg-white p-8 text-center shadow-soft"
        }
      >
        <p
          className={
            variant === "footer"
              ? "font-display text-lg text-blush-200"
              : "font-display text-2xl text-ink"
          }
        >
          “{word}” — received. 🖤
        </p>
        <p
          className={
            variant === "footer"
              ? "mt-1 text-sm text-blush-100/70"
              : "mt-2 text-ink-muted"
          }
        >
          Thank you for trusting us with it. We read every one.
        </p>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          aria-label="Your word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="your word…"
          className="w-full rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-blush-100/50 focus:border-blush-300 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-blush-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blush-400"
        >
          Send
        </button>
      </form>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-blush-200 bg-white p-6 shadow-soft sm:p-8"
    >
      <label className="block">
        <span className="eyebrow">The word</span>
        <input
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="What were you called?"
          className="mt-2 w-full rounded-2xl border border-blush-200 bg-blush-50 px-5 py-3 font-display text-lg text-ink placeholder:text-ink/30 focus:border-blush-400 focus:outline-none"
        />
      </label>

      <label className="mt-5 block">
        <span className="eyebrow">Its story (optional)</span>
        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          rows={3}
          placeholder="Who used it, and what it cost you to carry it."
          className="mt-2 w-full rounded-2xl border border-blush-200 bg-blush-50 px-5 py-3 text-ink placeholder:text-ink/30 focus:border-blush-400 focus:outline-none"
        />
      </label>

      <button type="submit" className="btn-pink mt-6 w-full sm:w-auto">
        Request this word
      </button>
    </form>
  );
}
