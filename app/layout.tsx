import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Community Driven Film Tokens on Bitcoin",
    template: `%s | CineCrowd`,
  },
  metadataBase: new URL("https://www.cinecrowd.xyz/"),
  description: "Revolutionizing Film Funding with Ordinals and Runes",
  keywords: [
    "Bitcoin",
    "Rune",
    "Ordinal",
    "Cinema",
    "Movie",
    "Film",
    "Crowdfunding",
    "Fundraising",
  ],
  // authors: [
  //   {
  //     name: "Farokh Madah",
  //     url: "https://t.me/FAR0KH",
  //   },
  // ],
  // creator: "Pooyan Sedghi",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.cinecrowd.xyz/",
    title: "Community Driven Film Tokens on Bitcoin",
    description: "Revolutionizing Film Funding with Ordinals and Runes",
    siteName: "CineCrowd",
    images: [
      {
        url: `/og.jpg`,
        width: 1200,
        height: 630,
        alt: "CineCrowd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CineCrowd",
    description: "Revolutionizing Film Funding with Ordinals and Runes",
    images: [`/og.png`],
    creator: "@cinecrowd_xyz",
  },
  icons: {
    icon: "/favicon.ico",
    // shortcut: "/favicon-16x16.png",
    shortcut: "/images/logo.webp",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
