"use client";

import { useEffect, useState } from "react";

// Auto-rotating single-message bar with a pause control, mirroring the
// reference. Messages are Giltees' own.
const messages = [
  "Free shipping on orders over $75",
  "Every body · every gender · XS–4XL",
  "Each tee ships with its own practice card",
  "Duties & taxes included at checkout",
];

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % messages.length),
      4000
    );
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div className="border-b border-line bg-paper text-ink">
      <div className="container-x relative flex h-9 items-center justify-center">
        <p
          key={index}
          className="animate-fade truncate px-8 text-center text-[11px] font-medium uppercase tracking-widest2"
        >
          {messages[index]}
        </p>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play announcements" : "Pause announcements"}
          className="absolute right-0 grid h-9 w-9 place-items-center text-ink/60 hover:text-ink"
        >
          {paused ? (
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
              <rect x="6" y="5" width="4" height="14" />
              <rect x="14" y="5" width="4" height="14" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
