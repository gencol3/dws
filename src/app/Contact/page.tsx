'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import  MainHeader from "../ui/header";
import ContactForm from "../ui/contact-form";
import Footer from "../ui/footer";

export default function Contact() {

  return (
    <main>
      <MainHeader />
      <div className="w-full bg-gray-100 flex flex-col justify-center items-center p-8 gap-8">
        <h2 className="md:text-5xl text-3xl font-bold text-blue-500">Reach Us</h2>
        <p className="md:text-2xl text-black text-xl font-semibold">We&apos;d love to hear from you!</p>
        <p className="text-black">Email us at: <Link href="mailto: digitalwonderssolutions@gmail.com">digitalwonderssolutions@gmail.com</Link></p>
        <p className="text-black">Call us at: <Link href="tel: 773-469-0870">773-469-0870</Link></p>
      </div>
      <div className="w-full bg-blue-900 flex flex-col justify-center items-center p-8 gap-8">
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}