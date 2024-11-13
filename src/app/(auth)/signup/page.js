
'use client';

import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full max-w-xs sm:max-w-sm bg-white p-6 rounded-lg ">
        <h2 className="text-2xl font-bold text-center text-black mb-6">Log In</h2>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 ">
              Enter your email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Adeyemitimilehin@gmail.com"
              className="w-full px-4 py-2 bg-white border-2 border-gray-400 rounded-full focus:outline-none "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter your password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••••••"
              className="w-full px-4 py-2 bg-white border-2 border-gray-400 rounded-full focus:outline-none "
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-[#E82429] rounded-full font-semibold hover:bg-[#d71f25] transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}


