import type { Metadata } from "next";
import { Baloo_2, Fredoka, Petrona } from "next/font/google";
import "./globals.css";

const baloo2 = Baloo_2({
  variable: "--font-baloo-2",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const petrona = Petrona({
  variable: "--font-petrona",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nahida | The Dendro Archon",
  description: "Lesser Lord Kusanali, also known by her Goetic name Buer, is the God of Wisdom and the current Dendro Archon among The Seven who presides over Sumeru.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/dendro.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${baloo2.variable} ${fredoka.variable} ${petrona.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
