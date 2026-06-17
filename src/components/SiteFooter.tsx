import Link from "next/link";
import { RequestWord } from "./RequestWord";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-blush-50">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="word-mark text-4xl text-blush-300">Giltees</p>
          <p className="mt-4 max-w-xs text-sm text-blush-100/80">
            Shadow work you can wear. Take the word that was used against you and
            wear it out loud — until it&apos;s just a word again.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.24em] text-blush-100/50">
            For every body. Every gender. XS–4XL.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-blush-300">
            Wander
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-blush-100/80">
            <li>
              <Link href="/shop" className="hover:text-white">
                Shop the words
              </Link>
            </li>
            <li>
              <Link href="/story" className="hover:text-white">
                Our story
              </Link>
            </li>
            <li>
              <Link href="/deeper" className="hover:text-white">
                Go deeper — readings &amp; therapists
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-white">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-blush-300">
            Request your word
          </h3>
          <p className="mt-4 text-sm text-blush-100/80">
            What were you shamed for? Tell us and we may make it.
          </p>
          <div className="mt-4">
            <RequestWord variant="footer" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-blush-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Giltees. Worn out loud.</p>
          <p>Soft on the outside. Done hiding on the inside.</p>
        </div>
      </div>
    </footer>
  );
}
