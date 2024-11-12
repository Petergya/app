'use client';

import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm  bg-white ">
        <h2 className="text-2xl font-bold text-center text-black mb-8">Log In</h2>
        <form onSubmit={handleLogin} className="space-y-6 w-full">
          {/* <div>
            <label className="block text-[14px] font-medium mb-2">Enter your email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Adeyemitimilehin@gmail.com"
              className="w-full px-4 py-2 border  rounded-full focus:outline-none  "
            />
          </div>
          <div>
            <label className="block text-[14px] font-medium mb-2">Enter your password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••••••"
              className="w-full px-4 py-2 border  rounded-full focus:outline-none  "
            />
          </div> */}
          <div>
  <label className="block text-[14px] font-medium mb-2">Enter your email</label>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Adeyemitimilehin@gmail.com"
    className="w-full px-4 py-2 bg-white border border-[#000000] rounded-full focus:outline-none"
  />
</div>
<div>
  <label className="block text-[14px] font-medium mb-2">Enter your password</label>
  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="••••••••••••••••"
    className="w-full px-4 py-2 bg-white border border-[#000000] rounded-full focus:outline-none"
  />
</div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-[#E82429] rounded-full "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}




