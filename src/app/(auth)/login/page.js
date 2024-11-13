



import Image from 'next/image';
import React from 'react';

export default function Login() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      
     
      <div className="md:w-1/2 w-full h-1/2 md:h-full relative">
        <Image 
          src="/images/Rectangle 20.png" 
          alt="A beautiful example image" 
          layout="fill" 
          objectFit="cover" 
          className="object-center"
        />
      </div>

     
      <div className="md:w-1/2 w-full flex items-center justify-center bg-white p-6">
        <div className="w-full max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-black">Log In</h1>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter your email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 border rounded-full focus:outline-none "
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter your password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-1 w-full px-4 py-2 border rounded-full focus:outline-none "
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 focus:outline-none mt-5"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


