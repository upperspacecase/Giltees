import type { Metadata } from "next";
import { Pacifico, Archivo } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import { WishlistProvider } from "@/components/WishlistContext";
import { UIProvider } from "@/components/UIContext";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CartDrawer } from "@/components/CartDrawer";

// Retro-script brand wordmark — kept as the brand anchor.
const script = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

// Heavy editorial grotesque for headings + clean body text.
const archivo = Archivo({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Giltees — wear the word that was used against you",
  description:
    "Giltees is shadow work you can wear. We take the words we've been shamed by — crazy, toxic, bitch, fake, poor — and wear them out loud, so they stop having power over us.",
  openGraph: {
    title: "Giltees — shadow work you can wear",
    description:
      "Take the word that was used against you and wear it out loud. Tees for anyone integrating the parts they were taught to hide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${script.variable} ${archivo.variable}`}>
      <body className="font-body">
        <UIProvider>
          <WishlistProvider>
            <CartProvider>
              <AnnouncementBar />
              <SiteHeader />
              <main className="min-h-[60vh]">{children}</main>
              <SiteFooter />
              <CartDrawer />
            </CartProvider>
          </WishlistProvider>
        </UIProvider>
      </body>
    </html>
  );
}
