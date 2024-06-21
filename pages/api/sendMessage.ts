import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const formData = req.body;

    console.log('Received form data:', formData);

    await resend.emails.send({
      from: 'dws@resend.dev',
      to: 'digitalwonderssolutions@gmail.com',
      subject: 'New Contact Form Message',
      html: `<p>This is an Email to DWS from Contact Form. the name of the person is: ${formData.name}, the referrer is ${formData.referrer} and ther phone number is ${formData.referrerPhone}, and the messengers email is ${formData.email}. The message is: (${formData.message})</p>`
    });

    // if resend is not sending the email, throw error
    if (!resend) {
      console.error('Error sending message');
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    console.log('Message sent successfully');

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending message:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
