// src/app/layout.tsx

import type { Metadata } from "next";
import { Dancing_Script, Raleway } from "next/font/google";
import "./globals.css";

const siteUrl = "https://lakesarearandr.com";

const script = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400", "500", "600", "700"],
});

const body = Raleway({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lakes Area R&R | Rentals, Mini Golf & Crystal Lake Fun",
    template: "%s | Lakes Area R&R",
  },
  description:
    "Lakes Area R&R in Merrifield, Minnesota offers rental equipment, Lakes Area Links natural mini golf, Crystal Lake activities, The Green Bean Coffee Shop, The Caddyshack, and Lakes Area Bottle Shop.",
  keywords: [
    "Lakes Area R&R",
    "Merrifield MN rentals",
    "Minnesota lake rentals",
    "golf cart rentals",
    "pontoon rentals",
    "jet ski rentals",
    "mini golf Merrifield MN",
    "Crystal Lake activities",
    "Lakes Area Links",
    "Green Bean Coffee Shop",
    "Lakes Area Bottle Shop",
    "The Caddyshack",
  ],
  authors: [{ name: "Lakes Area R&R" }],
  creator: "Hometown Web Services",
  publisher: "Lakes Area R&R",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Lakes Area R&R",
    title: "Lakes Area R&R | Minnesota’s Lakes Area Destination For Fun",
    description:
      "Rental equipment, natural mini golf, coffee, food, drinks, and Crystal Lake activities in Merrifield, Minnesota.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lakes Area R&R in Merrifield Minnesota",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakes Area R&R | Rentals, Mini Golf & Crystal Lake Fun",
    description:
      "Rental equipment, natural mini golf, coffee, food, drinks, and Crystal Lake activities in Merrifield, Minnesota.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${script.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}