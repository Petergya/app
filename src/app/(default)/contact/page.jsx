



'use client';

import Image from 'next/image';
import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white mt-32">
      <div className="flex w-full max-w-4xl p-6 space-x-8">
    
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src="/images/Rectangle 49.png"
            alt="Contact Us Illustration"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>

        
        <div className="w-1/2 bg-white">
          <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-600 mb-8">Get in touch for inventory management solutions.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
