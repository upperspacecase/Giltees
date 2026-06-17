import type { Metadata } from "next";
import { Pacifico, Fredoka, Quicksand } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

// Bold retro-script for the brand wordmark.
const script = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

// Soft, playful display for the reclaimed words.
const display = Fredoka({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Gentle, gender-neutral body voice.
const body = Quicksand({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Giltees — wear the word that was used against you",
  description:
    "Giltees is shadow work you can wear. We take the words we've been shamed by — crazy, toxic, bitch, fake, poor — and wear them out loud, so they stop having power over us.",
  openGraph: {
    title: "Giltees — shadow work you can wear",
    description:
      "Take the word that was used against you and wear it out loud. Pink-and-black tees for anyone integrating the parts they were taught to hide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${script.variable} ${display.variable} ${body.variable}`}
    >
      <body className="grain font-body">
        <CartProvider>
          <SiteHeader />
          <main className="min-h-[60vh]">{children}</main>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
