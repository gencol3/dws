import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function MainHeader() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="font-inter sticky top-0 z-50 bg-gradient-to-b from-custom-blue to-transparent">
            <style jsx>{`
                .font-inter {
                    font-family: 'Inter', sans-serif;
                }
                .header-nav {
                    transition: background-color 0.3s;
                }
            `}</style>
            <nav className="flex justify-between items-center py-4 px-6 hidden md:block header-nav">
                <div className="flex flex-row justify-between items-center">
                    <Link href="/">
                        <Image src="/logo.png" alt="Logo" width={100} height={100}/>
                    </Link>
                    <ul className="flex flex-row gap-4">
                        <li>
                            <Link href="/Services">Our Services</Link>
                        </li>
                        <li>
                            <Link href="/About">About Us</Link>
                        </li>
                        <li>
                            <Link href="/Contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link href="/Earn">Earn Money</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="flex justify-between items-center md:hidden py-4 px-6">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={50} height={50}/>
                </Link>
                <div className="md:hidden relative">
                    <button
                        className="text-white hover:text-gray-400 focus:outline-none"
                        onClick={toggleDropdown}
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    {isDropdownOpen && (
                        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 z-10 flex justify-center items-center"  onClick={toggleDropdown}>
                            <div className="w-2/3 p-2 rounded-md shadow-lg">
                                <ul className="flex flex-col gap-4 text-center">
                                    <li>
                                        <Link href="/" className='p-2'>Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/Services" className='p-2'>Our Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/About" className='p-2'>About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/Contact" className='p-2'>Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/Earn" className='p-2'>Earn Money</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

        </header>
    );
}
