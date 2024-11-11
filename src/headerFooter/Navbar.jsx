
"use client"
import { useState } from 'react';
import Link from 'next/link';
// import log from "../../public/images/Rectangle.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white text-gray-800 py-4 shadow-md fixed w-full z-10" style={{ top: "20px" }}>
      <div className="container mx-auto flex items-center justify-between px-8">
        
        <div className="text-3xl font-bold py-2">
          <Link href="/">LOGO
          {/* <img src={log} alt="" /> */}
          </Link>
        </div>

   
        <div className="hidden md:flex space-x-10 mr-[60%] mx-8  ">
          <Link href="/welcome" className="text-lg hover:text-gray-600 w-2/4">Welcome to</Link>
          <Link href="/add-items" className="text-lg hover:text-gray-600">Add Items</Link>
          <Link href="/about" className="text-lg hover:text-gray-600">About</Link>
          <Link href="/contact" className="text-lg hover:text-gray-600">Contact</Link>
        </div>
        <div className="md:hidden ml-auto">
          <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/welcome" className="text-lg hover:text-gray-600">Welcome to</Link>
            <Link href="/add-items" className="text-lg hover:text-gray-600">Add Items</Link>
            <Link href="/about" className="text-lg hover:text-gray-600">About</Link>
            <Link href="/contact" className="text-lg hover:text-gray-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}