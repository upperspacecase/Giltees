export type Product = {
  slug: string;
  word: string;
  // the insult/insecurity in its original, shaming context
  shamedAs: string;
  // the reframe — what we're actually claiming when we wear it
  reclaim: string;
  // a short shadow-work "practice" prompt that ships with the word
  practice: string;
  price: number;
  // Real product photo, dropped into /public/images/products/<slug>.<ext>.
  // When set, it replaces the gradient placeholder everywhere the tee shows.
  image?: string;
  // tailwind gradient classes for the tee mockup tile (fallback before a photo)
  tileFrom: string;
  tileTo: string;
  textTone: "light" | "dark";
};

// The founding line. Words we were shamed by, worn out loud.
// Built gender-neutral from day one — every fit is unisex, sized XS–4XL.
export const products: Product[] = [
  {
    slug: "crazy",
    word: "crazy",
    shamedAs: "Said to make you doubt what you felt.",
    reclaim:
      "I feel things at full volume. That was never the problem — being told to turn it down was.",
    practice:
      "Name one time you were called crazy for reacting to something that was actually happening. Write what you saw that they wanted you to un-see.",
    price: 42,
    tileFrom: "from-blush-500",
    tileTo: "to-ink",
    textTone: "light",
  },
  {
    slug: "toxic",
    word: "toxic",
    shamedAs: "A label handed to you the moment you had a boundary.",
    reclaim:
      "Sometimes 'toxic' just means 'stopped being convenient for you.' I'm allowed to be hard to use.",
    practice:
      "Recall a boundary that got you called toxic. Say it out loud again, exactly as you set it. Notice it still stands.",
    price: 42,
    image: "/images/products/toxic.png",
    tileFrom: "from-ink",
    tileTo: "to-blush-600",
    textTone: "light",
  },
  {
    slug: "bitch",
    word: "bitch",
    shamedAs: "The cost of taking up space without apologizing.",
    reclaim:
      "Direct. Unsmiling when I don't feel like smiling. Difficult, on purpose, when easy would cost me.",
    practice:
      "Think of a time you softened your 'no' so no one would call you this. Re-say the 'no' without the softening.",
    price: 42,
    image: "/images/products/bitch.png",
    tileFrom: "from-blush-400",
    tileTo: "to-blush-700",
    textTone: "light",
  },
  {
    slug: "fake",
    word: "fake",
    shamedAs: "Thrown at you for being a work in progress.",
    reclaim:
      "I tried on a self that wasn't mine yet. That's not fake — that's how becoming looks from the outside.",
    practice:
      "Find a version of you someone called fake. Thank them — that version was you reaching for something truer.",
    price: 42,
    image: "/images/products/fake.png",
    tileFrom: "from-blush-200",
    tileTo: "to-ink",
    textTone: "dark",
  },
  {
    slug: "poor",
    word: "poor",
    shamedAs: "A number you were taught to hide like a wound.",
    reclaim:
      "Money was scarce. My resourcefulness never was. I will not perform shame for a circumstance.",
    practice:
      "Write down one thing you learned from having less that the comfortable never had to learn. Keep the receipt.",
    price: 42,
    image: "/images/products/poor.png",
    tileFrom: "from-blush-300",
    tileTo: "to-ink",
    textTone: "light",
  },
  {
    slug: "too-much",
    word: "too much",
    shamedAs: "Code for 'shrink so I'm comfortable.'",
    reclaim:
      "Too loud, too deep, too soon, too honest — for people who wanted less of me. I'm the right amount of me.",
    practice:
      "List three things you've dimmed to be 'less.' Pick one to turn back up this week.",
    price: 44,
    tileFrom: "from-blush-500",
    tileTo: "to-blush-700",
    textTone: "light",
  },
  {
    slug: "sensitive",
    word: "sensitive",
    shamedAs: "Said like it's a defect, not an antenna.",
    reclaim:
      "I read the room before the room knows it's being read. That's not weakness — it's data.",
    practice:
      "Recall a feeling you were told was 'too sensitive.' Ask it what it was trying to warn you about.",
    price: 42,
    tileFrom: "from-blush-300",
    tileTo: "to-ink-soft",
    textTone: "light",
  },
  {
    slug: "dramatic",
    word: "dramatic",
    shamedAs: "Used to make your real pain sound like a performance.",
    reclaim:
      "My reaction matched the size of what happened. You just needed it to be smaller.",
    practice:
      "Name a moment you were called dramatic. State, plainly, what actually happened. Let it be exactly that big.",
    price: 42,
    image: "/images/products/dramatic.png",
    tileFrom: "from-ink",
    tileTo: "to-blush-500",
    textTone: "light",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
