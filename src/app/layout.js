import { Josefin_Sans, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import LiquidGlassNavbar from "@/components/navigation/LiquidGlassNavbar";
import { Analytics } from "@vercel/analytics/next"

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const bevietnam = Be_Vietnam_Pro({
  variable: "--font-bevietnam",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Ottica Fazio",
  description: "Professionisti della visione",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body
        // Suppress hydration warnings on the <body> because some browser extensions
        // inject attributes (for example `cz-shortcut-listen`) that differ between
        // the server-rendered HTML and the client DOM before React hydrates.
        // See: https://react.dev/link/hydration-mismatch
        suppressHydrationWarning
        className={`${josefin.variable} ${bevietnam.variable} antialiased`}
        style={{ fontFamily: 'var(--font-bevietnam), Arial, Helvetica, sans-serif' }}
      >
        {/* Skip link for keyboard navigation */}
        <a 
          href="#main-content" 
          className="skip-link"
          aria-label="Vai al contenuto principale"
        >
          Vai al contenuto principale
        </a>
        
        <LiquidGlassNavbar />
        <SmoothScroll>
          <main id="main-content" role="main">
            {children}
          </main>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
