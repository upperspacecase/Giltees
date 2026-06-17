import type { Product } from "@/lib/products";

// Stylized tee mockup. A deliberate placeholder for the brand's next phase:
// real photography of diverse people wearing the pieces.
export function TeeMockup({
  product,
  className = "",
}: {
  product: Pick<Product, "word" | "tileFrom" | "tileTo" | "textTone">;
  className?: string;
}) {
  const wordColor =
    product.textTone === "light" ? "text-blush-50" : "text-ink";

  return (
    <div
      className={`relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-gradient-to-br ${product.tileFrom} ${product.tileTo} ${className}`}
    >
      {/* Shirt silhouette */}
      <svg
        viewBox="0 0 200 220"
        className="absolute inset-0 h-full w-full opacity-95"
        aria-hidden="true"
      >
        <path
          d="M70 20 L40 35 L20 70 L40 85 L52 76 L52 200 L148 200 L148 76 L160 85 L180 70 L160 35 L130 20 C124 38 76 38 70 20 Z"
          fill="rgba(255,255,255,0.08)"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative z-10 px-6 text-center">
        <span
          className={`word-mark block text-4xl sm:text-5xl md:text-6xl ${wordColor} drop-shadow-sm`}
        >
          {product.word}
        </span>
      </div>

      <span className="absolute bottom-3 right-4 z-10 font-script text-sm text-white/60">
        Giltees
      </span>
    </div>
  );
}
