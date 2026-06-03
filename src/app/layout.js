import { EB_Garamond } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = "https://cardsaints.com";
const title = "Card Saints";
const description =
  "Card Saints is an investment firm focused on the trading card market. We buy, hold, and sell cards across sports, gaming, and collectibles.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Card Saints",
  },
  description,
  applicationName: title,
  keywords: [
    "trading cards",
    "card investment",
    "sports cards",
    "collectibles",
    "graded cards",
    "Card Saints",
  ],
  authors: [{ name: title, url: siteUrl }],
  creator: title,
  publisher: title,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: title,
    title,
    description,
    url: siteUrl,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ebGaramond.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
