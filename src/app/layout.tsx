import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Truculenta } from "next/font/google";
import Head from "next/head"; // Import Head component
import "./globals.css";
import { title } from "process";

const inter = Inter({ subsets: ["latin"] });
const truculenta = Truculenta({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Digital Wonders Solutions",
  description: "We Build Websites, Hybrid Apps, and PWAs for Your Business!",
  keywords: [
    "Business",
    "Websites",
    "App development",
  ],
  openGraph: {
    title: "Digital Wonders Solutions",
    description: "We Build Websites, Hybrid Apps, and PWAs for Your Business!",
    url: "https:/dwsolutions.online/",
    siteName: "Digital Wonders Solutions",
    images: [
      {
        url: "https://dwsolutions.online/logo.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={truculenta.className}>{children}</body>
    </html>
  );
}
