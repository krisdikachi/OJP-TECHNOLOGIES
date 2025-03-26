'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-ojpPrimary w-[100%] text-white py-10 mt-24">
      <div className="  px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>Email: support@ojptechnologiesltd.com</p>
            <p>Phone: +234 906 495 5374</p>
            <p>Address: Umudim, Nnewi, Anambra State, Nigeria</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="/">
                  <span className="hover:underline block py-1 cursor-pointer">Home</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about">
                  <span className="hover:underline block py-1 cursor-pointer">About Us</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/courses">
                  <span className="hover:underline block py-1 cursor-pointer">Courses</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact">
                  <span className="hover:underline block py-1 cursor-pointer">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          
        </div>
        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} OJP Technologies Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;