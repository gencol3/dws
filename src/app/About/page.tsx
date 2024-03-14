'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import  MainHeader from "../ui/header";
import ContactForm from "../ui/contact-form";
import Footer from "../ui/footer";

export default function About() {

  return (
    <main>
      <MainHeader />
      <div className="w-full flex flex-col justify-center items-center p-8 gap-8">
        <h2 className="md:text-5xl text-3xl font-bold text-blue-500">About Digital Wonders Solutions</h2>
        <p className="md:text-2xl text-xl font-semibold">From a far distance, We are a team of passionate designers and developers dedicated to moving businesses online. Up close, we are a community of hard-working, business-oriented indiviuals that want to help you out. Whether you want us to build a website, a progressive web app, or a hybrid app, we work together to complete the job. </p>
      </div>
      {/* Contact form */}
      <div className="w-full bg-blue-900 flex flex-col justify-center items-center p-8 gap-8">
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}