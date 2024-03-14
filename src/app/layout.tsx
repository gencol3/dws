import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Truculenta } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const truculenta = Truculenta({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: {
      url: "/logo.png",
      type: "image/png",
      sizes: "32x32",
    }
  },
  title: "Digital Wonders Solutions",
  description: "We Build Websites, Hybrid Apps, and PWAs for Your Business!",
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
