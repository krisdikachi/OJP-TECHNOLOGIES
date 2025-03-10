"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return; // Don't hide navbar when menu is open

      const scrollY = window.scrollY;
      setIsVisible(scrollY < lastScrollY.current);
      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <nav
      className={`navHead w-full fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-ojpPrimary border-b-4 border-ojpSecondary`}
    >
      <div className="container flex justify-between items-center py-4 px-6">
        <div className="text-ojpSecondary text-lg font-bold">
          <Link href="/">
            <Image
              src="/darkLogoTrans.png"
              alt="Logo"
              width={300}
              height={90}
              priority
              className="cursor-cell"
            />
          </Link>
        </div>
        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button
            className="text-ojpSecondary focus:outline-none"
            onClick={() => setMenuOpen(true)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* Desktop Nav Links */}
        <div className="hidden lg:flex space-x-6 ">
          <Link href="/" className="hover:text-ojpSecondary transition">Home</Link>
          <Link href="/about" className="hover:text-ojpSecondary transition">About</Link>
          <Link href="/contact" className="hover:text-ojpSecondary transition">Contact</Link>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50  transition-opacity  ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-full h-fit bg-ojpPrimary z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Close Button */}
          <button
            className="text-ojpSecondary self-end focus:outline-none mb-6"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Sidebar Links */}
          <nav className="flex flex-col space-y-6">
            <Link href="/" className="text-ojpSecondary text-xl hover:text-white" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" className="text-ojpSecondary text-xl hover:text-white" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" className="text-ojpSecondary text-xl hover:text-white" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>

          {/* Additional Content (Optional) */}
          <div className="mt-auto">
            <p className="text-sm text-ojpSecondary opacity-75">© 2025 OJP TECHNOLOGIES</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;