import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Empower your fans with CineCrowd",
    template: `%s | CineCrowd`,
  },
  metadataBase: new URL("https://cinecrowd.xyz"),
  description: "CineCrowd is a decentralized platform that empowers fans to support and influence their favorite films through valuable fan tokens.",
  keywords: [
    "Bitcoin",
    "Runes",
    "Ordinal",
    "Cinema",
    "Movie",
    "Film",
    "Crowdfunding",
    "Fan Token",
  ],
  authors: [
    {
      name: "Farokh Madah",
      url: "https://t.me/FAR0KH",
    },
  ],
  creator: "Pooyan Sedghi",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://cinecrowd.xyz",
    title: "Empower your fans with CineCrowd",
    description: "CineCrowd is a decentralized platform that empowers fans to support and influence their favorite films through valuable fan tokens.",
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
    description: "CineCrowd is a decentralized platform that empowers fans to support and influence their favorite films through valuable fan tokens.",
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
