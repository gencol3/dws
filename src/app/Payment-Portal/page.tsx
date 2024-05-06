'use client';
import React, { useState, useEffect } from "react";
import PaymentComponent from "../ui/payment-form";
import  MainHeader from "../ui/header";
import ContactForm from "../ui/contact-form";
import Footer from "../ui/footer";

export default function PP() {

  const handlePaymentSuccess = (orderId: string) => {
    // Handle payment success
    console.log('Payment successful! Order ID:', orderId);
  };

  return (
    <main>
      <MainHeader />
      <div>
        <PaymentComponent onSuccess={handlePaymentSuccess} />
      </div>
      {/* Contact form */}
      <div className="w-full bg-blue-900 flex flex-col justify-center items-center p-8 gap-8">
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
