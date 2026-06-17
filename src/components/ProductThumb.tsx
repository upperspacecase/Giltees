import Image from "next/image";
import { products } from "@/lib/products";

// Thumbnail for cart / drawer / checkout line items. Uses the real product
// photo when available, falling back to the gradient placeholder.
export function ProductThumb({
  slug,
  word,
  className = "",
}: {
  slug: string;
  word: string;
  className?: string;
}) {
  const p = products.find((x) => x.slug === slug);

  if (p?.image) {
    return (
      <div className={`relative shrink-0 overflow-hidden bg-bone ${className}`}>
        <Image
          src={p.image}
          alt={`Giltees “${word}” tee`}
          fill
          sizes="120px"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center bg-gradient-to-br ${
        p?.tileFrom ?? "from-blush-500"
      } ${p?.tileTo ?? "to-ink"} ${className}`}
    >
      <span className="word-mark text-paper">{word}</span>
    </div>
  );
}
