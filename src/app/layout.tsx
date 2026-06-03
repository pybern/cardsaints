import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cardsaints.com"),
  title: "Card Saints",
  description:
    "Trading card investment, collection appraisal, and partnership opportunities across sports, gaming, and collectibles.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Card Saints",
    description:
      "Investing in the long-term culture and market for trading cards.",
    url: "https://www.cardsaints.com",
    siteName: "Card Saints",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Card Saints",
    description:
      "Trading card investment, collection appraisal, and partnership opportunities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
