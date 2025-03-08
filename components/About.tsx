"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div
        className="cont bg-white p-8 rounded-lg shadow"
        data-aos="fade-up"
      >
        <h3 className="text-xl sm:text-4xl mb-4 text-white">
          OJP TECHNOLOGIES
        </h3>
        <p className="text-base sm:text-lg text-white leading-relaxed mb-4">
          <span className="font-semibold text-ojpSecondary">OJP TECH</span> is a 
          

        </p>
      </div>
    </div>
  );
};

export default About;