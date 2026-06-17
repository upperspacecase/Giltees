# Images

Drop product and hero photography here. No code changes needed beyond pointing
a product at its file (one line in `src/lib/products.ts`).

## Product photos

Put each tee photo in `products/` named after the product **slug**:

```
public/images/products/toxic.png      ← "toxic" tee
public/images/products/crazy.jpg      ← "crazy" tee
public/images/products/bitch.jpg      ← ...
```

Slugs (match these filenames):
`crazy, toxic, bitch, fake, poor, too-much, sensitive, dramatic`

Then set the `image` field on that product in `src/lib/products.ts`:

```ts
image: "/images/products/crazy.jpg",
```

If a product has no `image`, it falls back to the gradient placeholder
automatically — so you can add photos one at a time.

**Recommended:** portrait orientation (the tiles use a 4:5 crop), at least
~1000px wide, JPG or PNG. Keep files reasonably small (ideally < 500 KB) for
fast loading; large PNGs can be converted to JPG/WebP.

## Hero photo

The homepage hero is set in `src/app/page.tsx` via the `hero` config object
(`image`, `headline`, `subhead`). Point `image` at any file in here, e.g.
`/images/hero/home.jpg`. Use a high-resolution image — it fills the screen.
