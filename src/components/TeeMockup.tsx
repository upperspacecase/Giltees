import Image from "next/image";
import type { Product } from "@/lib/products";

// Shows the real product photo when one exists; otherwise a stylized gradient
// placeholder (a deliberate stand-in until photography lands). The gradient is
// where the brand's pink lives until those photos exist.
export function TeeMockup({
  product,
  className = "",
  sizes = "(min-width: 1024px) 25vw, 50vw",
  priority = false,
}: {
  product: Pick<
    Product,
    "word" | "image" | "tileFrom" | "tileTo" | "textTone"
  >;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (product.image) {
    return (
      <div className={`relative aspect-[4/5] overflow-hidden bg-bone ${className}`}>
        <Image
          src={product.image}
          alt={`Giltees “${product.word}” tee`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  const wordColor = product.textTone === "light" ? "text-paper" : "text-ink";

  return (
    <div
      className={`relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-gradient-to-br ${product.tileFrom} ${product.tileTo} ${className}`}
    >
      {/* Soft shirt silhouette */}
      <svg
        viewBox="0 0 200 220"
        className="absolute inset-0 h-full w-full opacity-90"
        aria-hidden="true"
      >
        <path
          d="M70 22 L42 36 L24 70 L42 84 L54 76 L54 198 L146 198 L146 76 L158 84 L176 70 L158 36 L130 22 C124 38 76 38 70 22 Z"
          fill="rgba(255,255,255,0.07)"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.25"
        />
      </svg>

      <div className="relative z-10 px-6 text-center">
        <span
          className={`word-mark block text-4xl sm:text-5xl ${wordColor} drop-shadow-sm`}
        >
          {product.word}
        </span>
      </div>

      <span className="absolute bottom-3 right-4 z-10 word-mark text-sm text-white/55">
        Giltees
      </span>
    </div>
  );
}
