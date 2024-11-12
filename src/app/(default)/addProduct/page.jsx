"use client";

import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Link from 'next/link';

export default function AddProduct() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [expiryDate, setExpiryDate] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

  const handleDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-4 py-6 md:py-12 mt-24">
      <div className="w-full max-w-6xl mb-8">
        <Link href="/" passHref>
          <div className="flex items-center text-black cursor-pointer mb-4 font-bold">
            <AiOutlineArrowLeft className="text-[18px] mr-2" />
            <span>Back</span>
          </div>
        </Link>
        <p className="text-[20px] text-black font-bold">Add Image</p>
      </div>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full h-full flex flex-col items-center justify-center mt-16 border-2 border-gray-200 rounded-lg bg-gray-100 text-gray-500 relative cursor-pointer min-h-[350px]">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center">
                <FaCamera className="text-4xl sm:text-6xl text-black" />
                <span className="text-sm mt-2 text-black text-[20px]">Upload Image</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleImageChange}
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <h2 className="text-[28px] sm:text-2xl font-semibold mb-6 text-center md:text-left">Upload New Item</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-[14px] mb-1">Name</label>
              <input
                type="text"
                placeholder="Golden Morn"
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-[14px] mb-1">Expiry Date</label>
              <input
                type="date"
                value={expiryDate}
                onChange={handleDateChange}
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-[14px] mb-1">Description</label>
              <textarea
                placeholder="Description of the item"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300 h-24"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-[14px] mb-1">Category</label>
              <select
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="">Select a category</option>
                <option value="food">Food</option>
                <option value="beverage">Beverage</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white text-[14px] py-2 rounded-full mt-4 hover:bg-gray-800"
            >
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
