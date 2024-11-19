"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

export default function AddUserForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    console.log("Form submitted!");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed lg:hidden top-0 left-0 h-full bg-gray-200 p-6 pt-8 w-52 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Manage Users</h1>
          <button onClick={toggleSidebar} className="text-2xl text-gray-600">
            <AiOutlineClose />
          </button>
        </div>

        <nav className="flex flex-col gap-6 mt-5">
          <a href="/dashboard" className="flex items-center hover:text-gray-600 text-black font-bold">
            <IoMenuOutline className="mr-3 text-3xl font-bold" /> Dashboard
          </a>
          <a href="/users" className="flex items-center hover:text-gray-600 text-black font-bold">
            <FaSearchPlus className="mr-3 text-xl" /> View Users
          </a>
          <a href="/addUsers" className="flex items-center hover:text-gray-600 text-black font-bold">
            <TiPlus className="mr-3 text-2xl" /> Add User
          </a>
          <a href="#" className="flex items-center hover:text-gray-600 text-black font-bold">
            <FiLogOut className="mr-3 text-xl" /> Logout
          </a>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 px-6 md:px-16">
    
        <div className="w-full md:w-1/2 p-4 md:p-8">
       
          <div className="lg:hidden flex justify-between gap-48 items-center mb-4 absolute top-4 right-4 z-10">
            <h1 className="text-2xl font-bold">Add User</h1>
            <button onClick={toggleSidebar} className="text-2xl text-gray-600">
              <IoMenuOutline />
            </button>
          </div>
          
         
          <h1 className="hidden lg:block text-2xl font-bold mb-6">Add User</h1>

          <form className="space-y-4 mt-16" onSubmit={handleFormSubmit}>
          
            <div>
              <label htmlFor="name" className="block text-[18px] md:text-[20px] font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-3xl border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
           
            <div>
              <label htmlFor="email" className="block text-[18px] md:text-[20px] font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-3xl border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
           
            <div>
              <label htmlFor="password" className="block text-[18px] md:text-[20px] font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 rounded-3xl border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
           
            <div>
              <label htmlFor="image" className="block text-[18px] md:text-[20px] font-medium text-gray-700">
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                onChange={handleImageChange}
                className="w-full p-3 rounded-3xl border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {/* Submit Button */}
            <div className="flex">
              <button
                type="submit"
                className="w-full md:w-1/2 p-3 mt-6 text-[20px] md:text-[24px] rounded-3xl text-white bg-[#E82429] font-semibold hover:bg-red-600 transition ml-auto"
              >
                Add
              </button>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-16">
          {selectedImage ? (
            <Image
              src={selectedImage}
              alt="Selected"
              width={400}
              height={400}
              className="object-cover rounded-lg"
            />
          ) : (
            <Image
              src="/images/Rectangle 54.png"
              alt="Food Inventory Illustration"
              width={400}
              height={400}
              className="object-cover rounded-lg"
            />
          )}
        </div>
      </div>
    </div>
  );
}

