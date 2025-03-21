"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="mt-32 flex flex-col md:flex-row justify-center items-center min-h-screen">
        <div className="w-full md:w-1/2 p-4">
          <Image
            src="/learning.jpg"
            alt="About Us"
            width={600}
            height={600}
            priority
            className="rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 bg-ojpSecondary rounded-lg">
          <h3 className="text-xl sm:text-4xl mb-4 text-white">Our Mission</h3>
          <p className="text-base sm:text-lg text-white leading-relaxed mb-4">
            To empower businesses and individuals through innovative technology solutions and education, driving sustainable growth and excellence in an ever-evolving digital landscape.
          </p>
          <h3 className="text-xl sm:text-4xl mb-4 text-white">Our Vision</h3>
          <p className="text-base sm:text-lg text-white leading-relaxed mb-4">
            To become a leading provider and premier partner of transformative tech solutions and education in Nigeria and beyond, driving innovation and excellence in the industry and delivering lasting value for our clients and students.
          </p>
        </div>
      </div>






      
      <div className="mt-32 flex justify-center items-center min-h-screen lg:w-[80%] ml-auto mr-auto sm:w-[100%]">
        <div className="cont bg-ojpSecondary p-8 rounded-lg shadow">
          <h3 className="text-xl sm:text-4xl mb-4 text-ojpPrimary">Our Story</h3>
          <p className="text-base sm:text-lg text-white leading-relaxed mb-4">
            <span className="font-semibold text-white">OJP TECHNOLOGIES</span> Welcome to OJP Technologies Ltd., a leading provider of innovative tech solutions and education. OJP stands for Objectively Judged Potential—a principle that defines our journey and purpose. Founded with a vision to bridge the gap between technological innovation and practical business applications, we objectively assess and unlock the potential in every project, partnership, and individual we engage with. We have grown into a trusted partner for businesses and individuals seeking excellence in the digital realm. We are passionate about equipping businesses and individuals with the skills and knowledge to thrive in an ever-evolving, tech-driven world. OJP Technologies Ltd is dedicated to developing and maintaining a culture that drives values to improve businesses. We understand that successful digital transformation goes beyond simply adopting and implementing new technologies—it requires a strategic approach that aligns with business goals, enhances core capabilities, and ensures long-term success. Our team of experts is committed to delivering innovative solutions that drive growth, improve efficiency, and create value for our clients. We leverage cutting-edge technologies, industry best practices, and proven methodologies to help businesses achieve their goals and stay ahead of the competition.
          </p>

          <h3 className="text-xl sm:text-4xl mb-4 text-ojpPrimary">Our Approach</h3>

          <p className="text-base sm:text-lg text-white leading-relaxed mb-4">
            We partner with startups, existing businesses, and educational institutions to enhance the success rate of software projects through a thorough discovery phase. We objectively assess the potential of every project to ensure the best possible outcome. This process translates business requirements into concrete techno-functional details. By carefully analyzing needs and aligning them with practical solutions, we ensure that no critical step is overlooked, setting the foundation for seamless execution and long-term success.
          </p>
        </div>
      </div>

      {/* second div */}
     
    </>
  );
};

export default About;