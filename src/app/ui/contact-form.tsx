'use client';
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [referrer, setReferrer] = useState("");
    const [ReferrerPhone, setReferrerPhone] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission
        try {
            const requestData = {
                name: name,
                referrer: referrer,
                referrerPhone: ReferrerPhone,
                email: email,
                message: message
            };

            console.log("Request Data:", requestData);

            // Make a request to send form data
            const { data: { success } } = await axios.post('/api/sendMessage', requestData);  
            // Handle the response accordingly
            if ( success ) {
                // Redirect to the dashboard
                router.push('/');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-row gap-2 justify-center items-center w-full mb-4 mt-4 p-4 justify-content">
            <div className="flex flex-col gap-2 justify-center items-center w-full mb-4 mt-4 md:p-4 justify-content">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 justify-center items-center w-full mb-4 mt-4 md:p-4 justify-content" data-netlify="true">
                    <label htmlFor="Name" className="text-white">Name:</label>
                    <input
                        type="text"
                        id="Name"
                        name="Name"
                        placeholder="Your Name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border-2 border-black text-black rounded p-2 w-full"
                    />
                    <label htmlFor="Referrer" className="text-white">Referrer:</label>
                    <small>Put &quot;No One&quot; if you don&apos;t have one</small>
                    <input
                        type="text"
                        id="Referrer"
                        name="Referrer"
                        placeholder="Who Reffered You?"
                        value={referrer}
                        onChange={(e) => setReferrer(e.target.value)}
                        className="border-2 border-black text-black rounded p-2 w-full"
                    />
                    <label htmlFor="Referrer" className="text-white">Referrer Phone Number:</label>
                    <small>Skip if you don&apos;t have one</small>
                    <input
                        type="number"
                        id="ReferrerPhone"
                        name="ReferrerPhone"
                        placeholder="Put Their Phonenumber..."
                        value={referrer}
                        onChange={(e) => setReferrerPhone(e.target.value)}
                        className="border-2 border-black text-black rounded p-2 w-full"
                    />
                   <label htmlFor="Email" className="text-white">Email:</label>
                    <input
                        type="text"
                        id="Email"
                        name="Email"
                        placeholder="Email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border-2 border-black text-black rounded p-2 w-full"
                    />
                    <label htmlFor="Message" className="text-white">Message:</label>
                    <textarea
                        id="Message"
                        name="Message"
                        placeholder="What Do You Want From Us?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="border-2 border-black text-black rounded p-4 w-full"
                    />
                    <button type="submit" className="bg-black mr-2 px-4 py-2 rounded">Work With Us</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
