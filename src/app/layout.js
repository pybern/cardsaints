import { EB_Garamond } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Card Saints",
  description:
    "Card Saints is an investment firm focused on the trading card market. We buy, hold, and sell cards across sports, gaming, and collectibles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ebGaramond.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
