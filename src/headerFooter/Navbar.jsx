"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return React.createElement(
    "nav",
    {
      className: "bg-white text-gray-800 py-4 fixed w-full z-10",
      style: { top: "0px" },
    },
    React.createElement(
      "div",
      { className: "container mx-auto flex items-center justify-between px-8" },
      React.createElement(
        "div",
        { className: "flex items-center space-x-10" },
        React.createElement(
          "div",
          { className: "text-3xl font-bold py-2" },
          React.createElement(
            Link,
            { href: "/" },
            React.createElement("img", {
              src: "/images/Rectangle 2.png",
              alt: "logo",
            })
          )
        ),
        React.createElement(
          "div",
          { className: "hidden md:flex space-x-10" },
          React.createElement(
            Link,
            {
              href: "/login",
              className: "text-lg hover:text-gray-600",
              onClick: closeMobileMenu,
            },
            "Welcome to"
          ),
          React.createElement(
            Link,
            {
              href: "/addProduct",
              className: "text-lg hover:text-gray-600",
              onClick: closeMobileMenu,
            },
            "Add Items"
          ),
          React.createElement(
            Link,
            {
              href: "/about",
              className: "text-lg hover:text-gray-600",
              onClick: closeMobileMenu,
            },
            "About"
          ),
          React.createElement(








            
            Link,
            {
              href: "/contact",
              className: "text-lg hover:text-gray-600",
              onClick: closeMobileMenu,
            },
            "Contact"
          )
        )
      ),
      React.createElement(
        Link,
        { href: "/signup" },
        React.createElement(
          "button",
          {
            className:
              "hidden md:block px-6 py-2 bg-[#E82429] text-white text-[16px] font-semibold rounded-full",
          },
          "Log in"
        )
      ),
      React.createElement(
        "div",
        { className: "md:hidden ml-auto" },
        React.createElement(
          "button",
          { onClick: toggleMobileMenu, className: "text-gray-800 focus:outline-none" },
          isMobileMenuOpen
            ? React.createElement("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: React.createElement("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12",
                }),
              })
            : React.createElement("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: React.createElement("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M4 6h16M4 12h16M4 18h16",
                }),
              })
        )
      )
    ),
    isMobileMenuOpen &&
      React.createElement(
        "div",
        { className: "md:hidden bg-white" },
        React.createElement(
          "div",
          { className: "flex flex-col items-center space-y-4 py-4" },
          React.createElement(
            Link,
            {
              href: "/login",
              className: "text-lg hover:text-gray-600",
              onClick: closeMobileMenu,
            },
            "Welcome to"
          ),
          React.createElement(
            Link,
            {
              href: "/addProduct",
              className: "text-lg hover:text-gray-600",
              onClick: closeMobileMenu,
            },
            "Add Items"
          ),
          React.createElement(
            Link,
            {
              href: "/about",
              className: "text-lg hover:text-gray-600",
              onClick: closeMobileMenu,
            },
            "About"
          ),
          React.createElement(
            Link,
            {
              href: "/contact",
              className: "text-lg hover:text-gray-600",
              onClick: closeMobileMenu,
            },
            "Contact"
          ),
          React.createElement(
            Link,
            { href: "/signup" },
            React.createElement(
              "button",
              {
                className: "px-4 py-2 bg-[#E82429] text-white text-[20px] font-semibold rounded-full",
                onClick: closeMobileMenu,
              },
              "Log in"
            )
          )
        )
      )
  );
}
