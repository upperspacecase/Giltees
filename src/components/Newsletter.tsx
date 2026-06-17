"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "./icons";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // Wire to your ESP (Klaviyo/Mailchimp/etc.) here.
    setDone(true);
  }

  return (
    <div className="mx-auto max-w-xl text-center">
      <h2 className="display text-3xl sm:text-4xl">Stay in the know</h2>
      <p className="mt-3 text-ink-muted">
        Be the first to hear about new words, drops, and the work behind them.
      </p>

      {done ? (
        <p className="mt-6 font-display font-bold uppercase tracking-wider2">
          You&apos;re in. 🖤
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 flex">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your email"
            aria-label="Email address"
            className="h-12 w-full border border-ink border-r-0 bg-paper px-4 text-sm placeholder:text-ink-muted focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="grid h-12 w-12 shrink-0 place-items-center bg-ink text-paper transition hover:bg-ink-soft"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>
      )}

      <p className="mx-auto mt-4 max-w-md text-[11px] leading-relaxed text-ink-muted">
        By subscribing you agree to receive emails from Giltees. Unsubscribe any
        time. We treat your story with care.
      </p>
    </div>
  );
}
