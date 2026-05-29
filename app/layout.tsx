import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import "./chrome.css";
import "./sections.css";
import { ChromeProvider } from "@/components/chrome/ChromeProvider";
import { Curtain } from "@/components/chrome/Curtain";
import { CustomCursor } from "@/components/chrome/CustomCursor";
import { Nav } from "@/components/chrome/Nav";
import { RailLabel } from "@/components/chrome/RailLabel";
import { Footer } from "@/components/chrome/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-display",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "East Adelaide Capital Group",
    template: "%s · East Adelaide Capital Group",
  },
  description:
    "A diversified Australian operating group across shelter, biotech and food.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <ChromeProvider>
          <Curtain />
          <CustomCursor />
          <Nav />
          <RailLabel />
          {children}
          <Footer />
        </ChromeProvider>
      </body>
    </html>
  );
}
