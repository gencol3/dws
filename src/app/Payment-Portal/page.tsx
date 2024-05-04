'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import  MainHeader from "../ui/header";
import ContactForm from "../ui/contact-form";
import Footer from "../ui/footer";

export default function PP() {

  return (
    <main>
      <MainHeader />
      {/* Contact form */}
      <div className="w-full bg-blue-900 flex flex-col justify-center items-center p-8 gap-8">
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
