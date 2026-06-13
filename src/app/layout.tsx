// src/app/layout.tsx

import type { Metadata } from "next";
import { Dancing_Script, Raleway } from "next/font/google";
import "./globals.css";

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
  title: "Lakes Area R&R | Escape to Fun",
  description:
    "Lakes Area R&R in Merrifield, Minnesota offers recreation rentals, Lakes Area Links, Bottle Shop, Caddyshack, Green Bean Coffee Company, Crystal Lake activities, and more.",
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