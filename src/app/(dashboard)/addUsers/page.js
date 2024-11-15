"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function AddUserForm() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
  };

  return (
    <div className="flex items-center justify-between gap-16 min-h-screen px-16">
      <div className="w-1/2 p-8">
        <h2 className="text-[24px] font-semibold mb-6">Add User</h2>
        <form className="space-y-4" onSubmit={handleFormSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-[20px] font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-3xl border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 "
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-[20px] font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-3xl border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 "
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-[20px] font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-3xl border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 "
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-[20px] font-medium text-gray-700"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              className="w-full p-3 rounded-3xl border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 "
            />
          </div>

          <div className="flex">
            <button
              type="submit"
              className="w-1/2 p-3 mt-6 text-[24px] rounded-3xl text-white bg-[#E82429] font-semibold hover:bg-red-600 transition ml-auto"
            >
              Add
            </button>
          </div>
        </form>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image
          src="/images/Rectangle 54.png"
          alt="Food Inventory Illustration"
          width={400}
          height={400}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
