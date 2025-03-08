"use client";

// import Image from "next/image";
import Navbar from "../components/Navbar";
import Script from "next/script";
import Link from "next/link";
import FacultiesSection from "../components/Courses";
import Contact from "./contact/page";

import Head from "next/head";


export default function Home() {
  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />


      {/* Hero Section with Static Header & Video */}
      <div className=" heroSection relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-white">
        {/* Left Side - Static Header */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-8 md:p-16 paragraphDiv bg-opacity-20">
          <h1 className="text-4xl md:text-6xl font-bold text-ojpPrimary ">
            OJP~ &quot;Where Technology Meets Innovation

          </h1>
          <p className="mt-3 text-lg text-ojpSecondary bg-opacity-50 rounded-md bg-ojpPrimary">
            & Innovation Meets Excellence&quot;






          </p>
        </div>

        {/* Right Side - Video */}
        <div className="  w-full md:w-1/2 block justify-center items-center p-8">
          <video
            className="w-full max-w-lg rounded-lg shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/ojpvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video><br />
          <div className="buttonDiv flex flex-col sm:flex-row justify-center items-center  space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="mailto:support@ojptechnologiesltd.com"
              className="bg-ojpPrimary text-white py-2 px-4 rounded-md shadow-md hover:bg-ojpSecondary transition"
            >
              Contact Us via Email
            </a>
            <a
              href="https://wa.me/+2349064955374?text=Hello%20OJP%20TECHNOLOGIES%20I%20came%20from%20your%20website%20and%20would%20like%20to%20transact%20."
              className="bg-ojpSecondary text-white py-2 px-4 rounded-md shadow-md hover:bg-ojpPrimary transition  sm:mt-0"
            >
              Contact Us via WhatsApp
            </a>
          </div>
        </div>
      </div>


      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div
          className="cont bg-white p-8 rounded-lg "
          data-aos="fade-up"
        >
          <h3 className="text-xl sm:text-4xl mb-4 text-ojpPrimary font-bold">
            OJP TECHNOLOGIES LTD
          </h3>
          <p className="text-base sm:text-lg text-white leading-relaxed mb-4">
            <span className="font-semibold text-ojpSecondary">OJP TECHNLOGIES</span> Welcome to OJP Technologies Ltd., a leading provider 
            of innovative tech solutions and education. OJP stands for 
            Objectively Judged Potential—a principle that defines our journey and purpose. 
            Founded with a vision to bridge the gap between technological innovation and practical 
            business applications, we objectively assess and unlock the potential in every project, partnership, and individual we engage with. 
            We have grown into a trusted partner for businesses and individuals seeking excellence in the digital realm. We are passionate about equipping businesses
             and individuals with the skills and knowledge to thrive in an ever-evolving, tech-driven world

&nbsp;&nbsp;&nbsp;
            <Link href="/about">
              <span className="text-ojpPrimary font-semibold hover:underline">
                Read More...
              </span></Link>
            {/* <Link href="/courses " className="text-black">hello</Link> */}
          </p>
        </div>
      </div>
      <div className="pHeader"><header className="text-4xl text-center font-bold text-ojpPrimary">Our Services</header>

        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
          <div className="relative w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 divide-gray-300 lg:divide-x lg:divide-y">

              {/* Course 1 */}
              <div className="flex flex-col justify-center items-center p-4 border-b border-gray-300 lg:border-r">
                <iframe src="https://lottie.host/embed/17a019d9-91a2-489f-add6-dddf4ae03936/akW9AGR4Yh.lottie"
                  className="w-24 h-24 mb-2"></iframe>
                <h4 className="text-lg font-semibold">Fintech Apps</h4>
                <p className="text-sm text-gray-700 text-center">
        Build secure and innovative fintech applications for mobile banking, payments, and financial management. 
                </p>
              </div>

              {/* Course 2 */}
              <div className="flex flex-col justify-center items-center p-4 border-b border-gray-300">
              <iframe src="https://lottie.host/embed/c78904b1-8d6c-4916-9718-975e955b36b1/LHC3eePquP.lottie"></iframe>
                <h4 className="text-lg font-semibold">Human Resource Solutions </h4>
                <p className="text-sm text-gray-700 text-center">
                 Optimize your human resource strategies with our expert consulting services, covering talent acquisition, training, and development. 
                </p>
              </div>

              {/* Course 3 */}
              <div className="flex flex-col justify-center items-center p-4 border-b border-gray-300 lg:border-b-0 lg:border-r">
                <iframe src="https://lottie.host/embed/ebf56937-7409-4a0b-a27b-63a6490c2813/eYKWX97Igf.lottie"
                  className="w-24 h-24 mb-2"></iframe>
                <h4 className="text-lg font-semibold">School Portal</h4>
                <p className="text-sm text-gray-700 text-center">
                Develop a comprehensive school portal for efficient management of student data, communication, and online learning
                </p>
              </div>

              {/* Course 4 */}
              <div className="flex flex-col justify-center items-center p-4 lg:border-t">
                <iframe src="https://lottie.host/embed/86553825-012b-4444-823d-4ca2e653d67d/mVpyNRcN6m.lottie"
                  className="w-24 h-24 mb-2"></iframe>
                <h4 className="text-lg font-semibold">Machine Learning </h4>
                <p className="text-sm text-gray-700 text-center">
                 Build intelligent systems. Develop custom machine learning models for predictive analytics, data-driven decision-making, and automation.                </p>
              </div>


              <div className="flex flex-col justify-center items-center p-4 lg:border-t">
              <iframe src="https://lottie.host/embed/d00e9885-82aa-402c-84e0-16dbe0282d67/yJGRAxHXRG.lottie"></iframe>                <h4 className="text-lg font-semibold">HRM Systems  </h4>
                <p className="text-sm text-gray-700 text-center">
                 Streamline your HR processes with our efficient HRM system, covering payroll, recruitment, performance management, and more.          </p>
              </div>

              <div className="flex flex-col justify-center items-center p-4 lg:border-t">
              <iframe src="https://lottie.host/embed/915e0e10-0495-48ef-9f6d-9799def2daa6/koVcwtHGVS.lottie"></iframe>
                <h4 className="text-lg font-semibold">Custom Software & App Development </h4>
                <p className="text-sm text-gray-700 text-center">
                 We develop powerful, scalable, and user-friendly applications tailored to meet the specific needs of businesses and individuals.          </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <FacultiesSection />

<Contact />
<div className=" mt-10">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63488.38991042998!2d6.864330570710713!3d5.991381077435929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sLocation%3A%20Umudim%2C%20Nnewi%2C%20Anambra%20State%2C%20Along%20Traffic%20Light%20!5e0!3m2!1sen!2sng!4v1741410517967!5m2!1sen!2sng" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    // allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

      
      <Script src="/custom-script.js" strategy="lazyOnload" />
    </>
  );
}
