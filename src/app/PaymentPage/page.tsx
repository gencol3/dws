// PaymentPage.tsx
'use client';
import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import PayPalPaymentButtons from '../ui/PayPalButtons';
import ContactForm from '../ui/contact-form';
import MainHeader from '../ui/header';

const PaymentPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const amount = searchParams ? searchParams.get('amount') : null;

  const [paypalClientId, setPaypalClientId] = useState<string | null>(null);

  useEffect(() => {
    // Fetch PayPal client ID from the API endpoint
    fetch('/api/paypal-client-id')
      .then((response) => response.json())
      .then((data) => {
        if (data.paypalClientId) {
          setPaypalClientId(data.paypalClientId);
        } else {
          console.error('PayPal client ID not found.');
        }
      })
      .catch((error) => {
        console.error('Failed to fetch PayPal client ID:', error);
      });
  }, []);

  if (!paypalClientId) {
    return <div>Loading...</div>;
  }

  const handleSuccess = () => {
    // Redirect to success page or perform any other action
    router.push('/');
  };

  const handleError = (error: any) => {
    // Handle error, display message, or retry payment
    console.error('Payment error:', error);
  };

  return (
    <div className='bg-blue-900'>
      <MainHeader />
      <div className="w-full bg-blue-900 flex flex-col justify-center items-center">
      <h1 className="md:text-5xl text-3xl font-bold text-blue-500">Payment Page</h1>
      <p>Total Amount: ${amount}</p>
      <div className="w-screen p-14">
      <PayPalPaymentButtons amount={parseFloat(amount as string)} paypalClientId={paypalClientId} onSuccess={handleSuccess} onError={handleError} />
      </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

const actualPage: React.FC = () => {
  return <Suspense fallback={<div>Loading...</div>}><PaymentPage /></Suspense>;
}

export default actualPage;
