"use client";

// import Image from "next/image";
import Navbar from "../components/Navbar";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import FacultiesSection from "../components/Courses";
import Contact from "./contact/page";
import Footer from "../components/Footer";
import Head from "next/head";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />


      {/* Hero Section with Static Header & Video */}
      <section className="bg-ojpSecondary mt-36 flex items-center w-[100%] justify-between px-4 sm:px-12 ">
        {/* Left Section */}
        <div className="text-left  max-w-l space-y-4 ">
          {/* <div className="block bg-ojpPrimary text-white w-fit py-2 px-2 rounded-lg text-sm font-semibold ">
            OJP Tech Quiz Cohort 1.0
          </div> */}
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-white ojpName">
            Welcome to <br />
            <span className="text-ojpPrimary font-gotham font-extrabold ojpName">OJP Technologies Ltd</span> <br />
            Where Innovation Meets Excellence!
          </h1>
          <p className="text-white text-base sm:text-lg font-light max-w-md ojpParagraph">
            We are committed to delivering high-quality services and courses that meet the evolving needs of our clients.
          </p>
          <div className="btnDiv flex space-x-4 mt-4">
            <Link href="#">
            <button className="ctnBtn bg-ojpPrimary text-gray-800 px-6 py-3 text-lg font-medium rounded-lg shadow-lg hover:bg-green-400 transition ease-in-out duration-200">
              Get Started
            </button>
            </Link>
            <Link href="/about">
            <button className="MsnBtn bg-white text-gray-800 px-6 py-3 text-lg font-medium rounded-lg shadow-lg hover:bg-white transition ease-in-out duration-2000">
             our mission
            </button>
            </Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="hidden lg:block">
          <Image
            width={450}
            height={450}            
            src="/Learning.jpg"
            alt="Courses illustration"
            className="w-[450px] h-[450px] object-contain rounded-[50%] border-8 border-white"
          />
        </div>
      </section>




      <section className="bg-ojpSecondary py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Section - Video */}
            <div className="w-full md:w-1/2 p-4">
            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F61567193102465%2Fvideos%2F1632919584766913%2F&show_text=false&width=560&t=0"  height="314" className="w-[100%] border-none overflow:hidden" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>            </div>

            {/* Right Section - Text */}
            <div className="w-full md:w-1/2 p-4 text-white">
              <h2 className="text-3xl font-bold mb-4">Our Introduction Video</h2>
              <p className="text-lg mb-4">
                Watch our introduction video to learn more about OJP Technologies Ltd. and how we are driving innovation and excellence in the tech industry.
              </p>
              <p className="text-lg">
                Our team of experts is committed to delivering high-quality services and courses that meet the evolving needs of our clients. Join us on our journey to bridge the gap between technological innovation and practical business applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* space */}

<button>
  <Link href="/courses">hello</Link>
</button>
      <div className="flex justify-center items-center min-h-screen mt-6">
        <div
          className="cont bg-ojpSecondary p-8 "
          data-aos="fade-up"
        >
          <h3 className="text-xl sm:text-4xl mb-4 text-ojpPrimary">
            OJP TECHNOLOGIES LTD
          </h3>
          <p className="text-base sm:text-lg text-white leading-relaxed mb-4">
            <span className=" text-white">OJP TECHNLOGIES</span> Welcome to OJP Technologies Ltd., a leading provider
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
      <div className="pHeader"><header className="text-4xl text-center font-bold text-ojpPrimary mt-24 ojpName">Services We Offer</header>

        <div className="flex justify-center items-center min-h-screen  p-4">
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

      {/* <FacultiesSection /> */}


       <section className="py-20">
            <div className="container mx-auto">
              <div className="flex flex-col items-center justify-center mb-10">
                <h2 className="text-4xl font-bold text-ojpPrimary mb-2">Our Courses</h2>
                <p className="text-lg text-ojpSecondary p-10">Ready to transform your future? Join us today and discover a world of possibilities in tech. Apply now for our cutting-edge courses and take your career to the next level</p>
              </div>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="mySwiper bg-black p-8 rounded-md shadow"
              >
                <SwiperSlide>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative w-full h-[80vh]">
                      <Image
                        src="/cyber2.jpg"
                        alt="faculty1"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center p-10">
                      <h3 className="text-2xl font-semibold text-ojpPrimary mb-2">CYBERSECURITY</h3>
                      <p className="text-lg text-white">Become a cybersecurity expert</p>
                      <p className="text-lg text-white">Dive into cybersecurity fundamentals and advance security measures</p>
                      <Link href="/contact" className='mt-4'>
                        <span className="mt-2 px-4 py-2 bg-ojpPrimary text-white rounded-md hover:bg-ojpSecondary transition">
                          Apply Now
                        </span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
      
             
      
      
                <SwiperSlide>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative w-full h-[80vh]">
                      <Image
                        src="/robotics.jpg"
                        alt="faculty2"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center p-10">
                      <h3 className="text-2xl font-semibold text-ojpPrimary mb-2">Robotics and AI</h3>
                      <p className="text-lg text-white">Explre the cutting edge of robotics and AI building </p>
                      <p className="text-lg text-white">intelligent system for various application</p>
                      <Link href="/contact" className='mt-4'>
                        <span className="mt-2 px-4 py-2 bg-ojpPrimary text-white rounded-md hover:bg-ojpSecondary transition">
                          Apply Now
                        </span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
      
                <SwiperSlide>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative w-full h-[80vh]">
                      <Image
                        src="/roofing.jpg"
                        alt="faculty2"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center p-10">
                      <h3 className="text-2xl font-semibold text-ojpPrimary mb-2">Roofing Technology</h3>
                      <p className="text-lg text-white">Develop innovative iOS apps using</p>
                      <p className="text-lg text-white">Swift and Xcode, ensuring seamless User Experience</p>
                      <Link href="/contact" className='mt-4'>
                        <span className="mt-2 px-4 py-2 bg-ojpPrimary text-white rounded-md hover:bg-ojpSecondary transition">
                          Apply Now
                        </span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
      
      
                <SwiperSlide>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative w-full h-[80vh]">
                      <Image
                        src="/webdev2.jpg"
                        alt="faculty2"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center p-10">
                      <h3 className="text-2xl font-semibold text-ojpPrimary mb-2">Website Development</h3>
                      <p className="text-lg text-white">Master Frontend and Backend technologies</p>
                      <p className="text-lg text-white">to develop dynamic and responsive websites</p>
                      <Link href="/contact" className='mt-4'>
                        <span className="mt-2 px-4 py-2 bg-ojpPrimary text-white rounded-md hover:bg-ojpSecondary transition">
                          Apply Now
                        </span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
      
      
      
              
                {/* Add more SwiperSlide components as needed */}
              </Swiper>
            </div>
          </section>

      <Contact />
      <Footer />
      {/* <div className=" mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63488.38991042998!2d6.864330570710713!3d5.991381077435929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sLocation%3A%20Umudim%2C%20Nnewi%2C%20Anambra%20State%2C%20Along%20Traffic%20Light%20!5e0!3m2!1sen!2sng!4v1741410517967!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          // allowFullScreen={true} 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div> */}


      <Script src="/custom-script.js" strategy="lazyOnload" />
    </>
  );
}




































