# Giltees

**Shadow work you can wear.**

Giltees is a clothing brand built around a simple practice: taking the words
we've been shamed by — _crazy, toxic, bitch, fake, poor_ — and wearing them out
loud, so they stop having power over us. Each tee names a charged word in a
soft, playful font on a pink-and-black aesthetic, turning an insult into
something owned rather than hidden.

The system is built gender-neutral from day one (unisex fits, XS–4XL) and is
designed to evolve toward a more organic feel with real photography of diverse
people, plus a men's line later.

## Stack

- [Next.js 14](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) — a clean, editorial **white + black**
  design system (monochrome chrome, sharp corners, pink via imagery/accents)
- `next/font` — Pacifico (retro-script wordmark, kept as the brand anchor) +
  Archivo (heavy uppercase headings & body)
- Client-side **cart**, **wishlist**, and **slide-out bag drawer** via React
  Context + `localStorage` (no backend required to demo)

## Pages

| Route          | What it is                                                            |
| -------------- | --------------------------------------------------------------------- |
| `/`            | Home — full-bleed hero leads with **crazy** + spotlight + product rail |
| `/story`       | Manifesto + the founder's journey                                     |
| `/shop`        | The product line + the **Request your word** feature                  |
| `/shop/[slug]` | Product page with a short shadow-work **practice** prompt per word    |
| `/cart`        | Full bag view with quantities, sizes, free-shipping threshold         |
| `/checkout`    | Demo checkout (no payment processor wired up yet)                     |
| `/wishlist`    | Saved words (heart toggle on every product card)                      |
| `/deeper`      | **Go deeper** — shadow-work & astrology readings + therapist directory |

The header bag icon opens a **slide-out drawer** (`CartDrawer`) with an empty
state and an "explore more" rail; `/cart` remains as the full-page view.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Where to plug in real services

These are intentionally stubbed so the site runs end-to-end as a demo:

- **Payments** — `src/app/checkout/page.tsx`: swap the demo submit for Stripe or
  Shopify Checkout and POST the cart.
- **Word requests** — `src/components/RequestWord.tsx`: `persist()` writes to
  `localStorage`; replace with a real `POST` to collect suggestions.
- **Readings & therapist intros** — `src/app/deeper/page.tsx`: the booking CTAs
  point at a `mailto:`; wire to a scheduler/form when ready.
- **Product imagery** — `src/components/TeeMockup.tsx` renders stylized
  placeholders. Drop in real photography of diverse people wearing the pieces.

## Adding a word

Add an entry to the `products` array in `src/lib/products.ts`. Each word carries
its own `shamedAs`, `reclaim`, and `practice` copy, plus gradient colors for the
mockup. New pages are generated automatically.
