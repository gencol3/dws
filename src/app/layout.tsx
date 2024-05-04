import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Truculenta } from "next/font/google";
import Script from 'next/script'
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
      <Script id="leadfeeder-script" strategy="lazyOnload">
        {`
          (function(ss,ex){
            window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));};
            (function(d,s){
              fs=d.getElementsByTagName(s)[0];
              function ce(src){
                var cs=d.createElement(s);
                cs.src=src;
                cs.async=1;
                fs.parentNode.insertBefore(cs,fs);
              };
              ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js');
            })(document,'script');
          })('ywVkO4XBBBE8Z6Bj');
        `}
      </Script>
    </html>
  );
}
