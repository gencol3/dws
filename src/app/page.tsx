'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import  MainHeader from "./ui/header";
import ContactForm from "./ui/contact-form";
import Footer from "./ui/footer";

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "We Build Websites, Hybrid Apps, and PWAs for Your Business!",
    "W", "We", "We B", "We Bu", "We Bui", "We Build", "We Build W", "We Build We", "We Build Web", "We Build Webs", "We Build Websi", "We Build Websit", "We Build Website", "We Build Websites", "We Build Websites ", "We Build Websites, ", "We Build Websites, H", "We Build Websites, Hy", "We Build Websites, Hyb", "We Build Websites, Hybr", "We Build Websites, Hybrid", "We Build Websites, Hybrid A", "We Build Websites, Hybrid Ap", "We Build Websites, Hybrid App", "We Build Websites, Hybrid Apps, ", "We Build Websites, Hybrid Apps, a", "We Build Websites, Hybrid Apps, an", "We Build Websites, Hybrid Apps, and ", "We Build Websites, Hybrid Apps, and P", "We Build Websites, Hybrid Apps, and PW", "We Build Websites, Hybrid Apps, and PWA", "We Build Websites, Hybrid Apps, and PWAs", "We Build Websites, Hybrid Apps, and PWAs ", "We Build Websites, Hybrid Apps, and PWAs f", "We Build Websites, Hybrid Apps, and PWAs fo", "We Build Websites, Hybrid Apps, and PWAs for", "We Build Websites, Hybrid Apps, and PWAs for ", "We Build Websites, Hybrid Apps, and PWAs for Y", "We Build Websites, Hybrid Apps, and PWAs for Yo", "We Build Websites, Hybrid Apps, and PWAs for You", "We Build Websites, Hybrid Apps, and PWAs for Your", "We Build Websites, Hybrid Apps, and PWAs for Your ", "We Build Websites, Hybrid Apps, and PWAs for Your B", "We Build Websites, Hybrid Apps, and PWAs for Your Bu", "We Build Websites, Hybrid Apps, and PWAs for Your Bus", "We Build Websites, Hybrid Apps, and PWAs for Your Busi", "We Build Websites, Hybrid Apps, and PWAs for Your Busin", "We Build Websites, Hybrid Apps, and PWAs for Your Business", "We Build Websites, Hybrid Apps, and PWAs for Your Business!", "We Build Websites, Hybrid Apps, and PWAs for Your Business!", "We Build Websites, Hybrid Apps, and PWAs for Your Business!", "We Build Websites, Hybrid Apps, and PWAs for Your Business!", "We Build Websites, Hybrid Apps, and PWAs for Your Business!", "We Build Websites, Hybrid Apps, and PWAs for Your Business!", "We Build Websites, Hybrid Apps, and PWAs for Your Business!", "We Build Websites, Hybrid Apps, and PWAs for Your Business!", "We Build Websites, Hybrid Apps, and PWAs for Your Business!", "We Build Websites, Hybrid Apps, and PWAs for Your Business!", "We Build Websites, Hybrid Apps, and PWAs for Your Business!",
    // Add more texts if needed
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => {
        if (prevIndex === texts.length - 1) {
          clearInterval(intervalId);
          return prevIndex;
        }
        return (prevIndex + 1) % texts.length;
      });
    }, 200); // Change the interval duration (in milliseconds) as needed

    // Clear interval once the last item is displayed
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <MainHeader />
      <div className="w-full h-screen flex flex-row">
        <div className="md:w-1/2 w-full h-screen flex flex-col md:justify-top md:p-8 p-4">
          <h1 className="md:text-7xl text-5xl font-bold">{texts[textIndex]}</h1>
          <p className="md:text-2xl text-xl">Join the Digital World.</p>
          <Link href="/Contact" className="bg-red-500 text-white text-center p-3 rounded-full mt-4 md:w-1/3 w-1/2 md:text-5xl sm:text-3xl sm:w-1/2 text-3xl font-bold drop-shadow-2xl">Choose Us</Link>
        </div>
        <div className="w-full h-screen hidden md:flex md:w-1/2 flex justify-top items-center flex flex-col">
          <Image
            src="/hero.png"
            alt="hero"
            width={500}
            height={500}
          />
          <small><Link href="https://www.freepik.com/free-vector/startup-construction-development-3d-thin-line-art-style-design-concept-isometric-illustration_15481135.htm#fromView=search&page=1&position=2&uuid=fbea0af3-6400-4260-9cc7-a5b033a362ab">Image by macrovector</Link> on Freepik</small>
        </div>
      </div>
      <div className="w-full bg-gray-100 flex flex-col justify-center items-center p-8 gap-8">
        <h2 className="md:text-5xl text-3xl font-bold text-blue-500">What We can Offer You</h2>
        <div className="flex md:flex-row flex-col justify-center gap-10">
          <p className="md:text-2xl text-xl text-center text-gray-500 md:w-1/3 w-full justify-top">Our websites, apps, and progressive web apps are built by professional designers and developers. We pay close attention to your business&apos;s needs and present you with the best solutions.</p>
          <ul className="gap-4 mt-4 list-disc justify-center gap-2 flex flex-col">
            <li className="md:text-2xl text-xl text-blue-500">Websites</li>
            <li className="md:text-2xl text-xl text-blue-500">Apps</li>
            <li className="md:text-2xl text-xl text-blue-500">PWAs</li>
            <Link href="/Services" className="bg-black text-white text-center p-3 rounded-full mt-4 w-full md:text-2xl text-xl font-bold drop-shadow-2xl">Learn More</Link>
          </ul>
        </div>
      </div>
      <div className="w-full bg-blue-900 flex flex-col justify-center items-center p-8 gap-8">
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}