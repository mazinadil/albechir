import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AL Bechir — Websites & Meta Ads That Turn Visitors Into Real Clients",
  description:
    "We build conversion-focused websites, landing pages, and Meta Ads that generate more leads, WhatsApp messages, calls, and sales for your business in the UAE & GCC.",
  keywords: [
    "web development",
    "meta ads",
    "digital marketing",
    "UAE",
    "Dubai",
    "landing pages",
    "ecommerce",
    "GCC",
    "conversion optimization",
  ],
  authors: [{ name: "AL Bechir" }],
  openGraph: {
    title: "AL Bechir — Websites & Meta Ads That Turn Visitors Into Real Clients",
    description:
      "We build conversion-focused websites, landing pages, and Meta Ads that generate more leads, WhatsApp messages, calls, and sales for your business.",
    type: "website",
    locale: "en_US",
    siteName: "AL Bechir",
  },
  twitter: {
    card: "summary_large_image",
    title: "AL Bechir — Websites & Meta Ads That Turn Visitors Into Real Clients",
    description:
      "We build conversion-focused websites, landing pages, and Meta Ads that generate more leads, WhatsApp messages, calls, and sales for your business.",
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
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
