'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import  MainHeader from "../ui/header";
import ContactForm from "../ui/contact-form";
import Footer from "../ui/footer";

export default function Earn() {

  return (
    <main>
      <MainHeader />
      <div className="w-full bg-gray-100 flex flex-col justify-center items-center p-8 gap-8">
        <h1 className="md:text-5xl text-3xl font-bold text-blue-500">Earn Money With Us!</h1>
        <p className="md:text-2xl text-black text-xl">There are ways you can help grow our company while filling you wallets.</p>
        <ul className="text-black text-xl list-disc">
            <li>Become a remote Telemarketer</li>
            <li>Join the Team of Designers</li>
            <li>Join the Team of Developers</li>
            <li>Refer Your Friends to Us</li>
        </ul>
      </div>
      {/* Telemarketers and Referrals */}
      <div className="w-full bg-gray-200 flex md:flex-row flex-col justify-center items-center p-8 gap-8">
        <div className="md:w-1/2 flex flex-col justify-center items-center p-8 gap-8">
            <h2 className="md:text-4xl text-3xl font-bold text-blue-500">Become a Remote Telemarketer</h2>
            <p className="md:text-2xl text-black text-xl">Work on your own time from home and watch money pour in!</p>
            <ul className="text-black text-xl list-disc">
                <li>Get 10% of sale per website sale!</li>
                <li>Get 10% per progressive web app sale!</li>
                <li>Get 10% per hybrid app sale!</li>
            </ul>
            <p className="md:text-2xl text-black text-xl">Get Paid When The Job Is Completed.</p>
            <p className="md:text-2xl text-black text-xl">You will need a valid email, Cashapp, and phone number.</p>
            <p className="text-black">Contact us at : <Link href="mailto: digitalwonderssolutions@gmail.com">digitalwonderssolutions@gmail.com</Link> to apply. Open to anyone 18+</p>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center p-8 gap-8">
            <h2 className="md:text-4xl text-3xl font-bold text-blue-500">Refer Friends and Family to Us</h2>
            <p className="md:text-2xl text-black text-xl">Make Money when We Make Money</p>
            <ul className="text-black text-xl list-disc">
                <li>Get $25 per website referrel!</li>
                <li>Get $50 per progressive web app referrel!</li>
                <li>Get $75 per hybrid app referrel!</li>
            </ul>
            <p className="md:text-2xl text-black text-xl">Get Paid When The Job Is Completed.</p>
            <p className="md:text-2xl text-black text-xl">You will need a valid email, Cashapp, and phone number.</p>
            <p className="text-black">Contact us at : <Link href="mailto: digitalwonderssolutions@gmail.com">digitalwonderssolutions@gmail.com</Link> to start. Open to anyone</p>
        </div>
      </div>
      {/* Designers and Developers */}
      <div className="w-full bg-gray-400 flex md:flex-row flex-col justify-center items-center p-8 gap-8">
        <div className="md:w-1/2 flex flex-col justify-center items-center p-8 gap-8">
            <h2 className="md:text-4xl text-3xl font-bold text-blue-200">Join the Team of Remote Designers</h2>
            <p className="md:text-2xl text-black text-xl">Work With us to Create Beautiful Designs.</p>
            <ul className="text-black text-xl list-disc">
                <li>We hire designers with all levels of experience.</li>
                <li>Our designers work from home.</li>
                <li>A spot on the team is open to anyone with at least three years of experience.</li>
            </ul>
            <p className="md:text-2xl text-black text-xl">We choose your team and you choose your projects.</p>
            <p className="md:text-2xl text-black text-xl">Pay will vary from project to project.</p>
            <p className="md:text-2xl text-black text-xl">You will need a valid email, Cashapp or Paypal, resume, and phone number.</p>
            <p className="text-black">Contact us at : <Link href="mailto: digitalwonderssolutions@gmail.com">digitalwonderssolutions@gmail.com</Link> to apply. Open to anyone 18+</p>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center p-8 gap-8">
            <h2 className="md:text-4xl text-3xl font-bold text-blue-200">Join the Team of Remote Developers</h2>
            <p className="md:text-2xl text-black text-xl">Work With us to Build Beautiful Applications.</p>
            <ul className="text-black text-xl list-disc">
                <li>We hire designers with all levels of experience.</li>
                <li>Our developers work from home.</li>
                <li>A spot on the team is open to anyone with at least three years of experience.</li>
            </ul>
            <p className="md:text-2xl text-black text-xl">We choose your team and you choose your projects.</p>
            <p className="md:text-2xl text-black text-xl">Pay will vary from project to project.</p>
            <p className="md:text-2xl text-black text-xl">You will need a valid email, Cashapp or Paypal, resume, and phone number.</p>
            <p className="text-black">Contact us at : <Link href="mailto: digitalwonderssolutions@gmail.com">digitalwonderssolutions@gmail.com</Link> to apply. Open to anyone 18+</p>
        </div>
      </div>
      {/* Contact form */}
      <div className="w-full bg-blue-900 flex flex-col justify-center items-center p-8 gap-8">
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
