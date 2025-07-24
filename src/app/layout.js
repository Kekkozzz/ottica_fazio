import { Josefin_Sans, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import LiquidGlassNavbar from "@/components/navigation/LiquidGlassNavbar";

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
        className={`${josefin.variable} ${bevietnam.variable} antialiased`}
        style={{ fontFamily: 'var(--font-bevietnam), Arial, Helvetica, sans-serif' }}
      >
        <LiquidGlassNavbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
