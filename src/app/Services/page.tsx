'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import  MainHeader from "../ui/header";
import ContactForm from "../ui/contact-form";
import Footer from "../ui/footer";

export default function Services() {

  return (
    <main>
      <MainHeader />
      {/* Services */}
      <div className="w-full bg-gray-100 flex flex-col justify-center items-center p-10 md:p-8 gap-8">
        <h1 className="text-5xl font-bold text-blue-500">What We Offer</h1>
        <ul className="text-black text-3xl list-disc">
          <li className="text-blue-700 text-4xl">Website Development</li>
          <p className="text-black text-base">Our Websites are made with the latest technologies. Some of the technologies we use are:</p> <ul className="text-black text-base indent-8">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>And many more!</li>
          </ul>
          <li className="text-blue-700 text-4xl">Hybrid App Development</li>
          <p className="text-black text-base">Our Hybrid Apps are made with the latest technologies. Some of the technologies we use are:</p>
          <ul className="text-black text-base indent-8">
            <li>React Native</li>
            <li>Expo</li>
            <li>TypeScript</li>
            <li>Flutter</li>
            <li>Dart</li>
            <li>And many more!</li>
          </ul>
          <li className="text-blue-700 text-4xl">Progressive Web App Development</li>
          <p className="text-black text-base">Our Progressive Web Apps are made with the latest technologies. Some of the technologies we use are:</p>
          <ul className="text-black text-base indent-8">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>And many more!</li>
          </ul>
          <li className="text-blue-700 text-4xl">EIN Number Obtainment</li>
          <p className="text-black text-base">We Help You Establish Business Credit. Here are some things you can do with an EIN number:</p>
          <ul className="text-black text-base indent-8">
            <li>Separate Business Credit from Personal Credit</li>
            <li>Be Eligibale for Loans to Grow Your Business</li>
            <li>Obtain a Company Vehicle for Your Business with Credit</li>
          </ul>
        </ul>
        <p className="text-black text-xl">Technologies also depends on assigned developers</p>
        <p className="text-black text-xl">Pricing could vary on project. Contact us to get a quote.</p>
      </div>
      {/* Contact form */}
      <div className="w-full bg-blue-900 flex flex-col justify-center items-center p-8 gap-8">
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}