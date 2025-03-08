"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';

export default function FacultiesSection() {
  return (
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
                  src="/cyber.jpg"
                  alt="faculty1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center items-center p-10">
                <h3 className="text-2xl font-semibold text-ojpPrimary mb-2">CYBERSECURITY</h3>
                <p className="text-lg text-ojpPrimary">Become a cybersecurity expert</p>
                <p className="text-lg text-ojpPrimary">Dive into cybersecurity fundamentals and advance security measures</p>
                <Link href="/contact">
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
                  src="/data science.jpg"
                  alt="faculty1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col justify-center items-center p-10">
                <h3 className="text-2xl font-semibold text-ojpPrimary mb-2">Data Science</h3>
                <p className="text-lg text-ojpPrimary">Master data analysis, machine learning and AI with tools like:</p>
                <p className="text-lg text-ojpPrimary">Python, R and SQL to drive business intelligence and innovation</p>
                <Link href="/contact">
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
                  src="/data analytics.jpg"
                  alt="faculty2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col justify-center items-center p-10">
                <h3 className="text-2xl font-semibold text-ojpPrimary mb-2">Data Analytics</h3>
                <p className="text-lg text-ojpPrimary">Learn to interpret and visualize data using tools like</p>
                <p className="text-lg text-ojpPrimary">Tableau, Power BI, and Excel to make informed business decisions</p>
                <Link href="/contact">
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
                  src="/app dev.jpg"
                  alt="faculty2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col justify-center items-center p-10">
                <h3 className="text-2xl font-semibold text-ojpPrimary mb-2">Apple App Development</h3>
                <p className="text-lg text-ojpPrimary">Develop innovative iOS apps using</p>
                <p className="text-lg text-ojpPrimary">Swift and Xcode, ensuring seamless User Experience</p>
                <Link href="/contact">
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
                  src="/android.jpg"
                  alt="faculty2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col justify-center items-center p-10">
                <h3 className="text-2xl font-semibold text-ojpPrimary mb-2">Android App Development</h3>
                <p className="text-lg text-ojpPrimary">Gain proficiency in building scalable Android apps</p>
                <p className="text-lg text-ojpPrimary">using JAVA and Kotlin</p>
                <Link href="/contact">
                  <span className="mt-4 px-4 py-2 bg-ojpPrimary text-white rounded-md hover:bg-ojpSecondary transition">
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
                  src="/Game dev.jpg"
                  alt="faculty2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col justify-center items-center p-10">
                <h3 className="text-2xl font-semibold text-ojpPrimary mb-2">Game App Development</h3>
                <p className="text-lg text-ojpPrimary">Design and develop captivating moBile games using UNITY</p>
                <p className="text-lg text-ojpPrimary">and Unreal Engine</p>
                <Link href="/contact">
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
                <p className="text-lg text-ojpPrimary">Explre the cutting edge of robotics and AI building </p>
                <p className="text-lg text-ojpPrimary">intelligent system for various application</p>
                <Link href="/contact">
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
                <p className="text-lg text-ojpPrimary">Develop innovative iOS apps using</p>
                <p className="text-lg text-ojpPrimary">Swift and Xcode, ensuring seamless User Experience</p>
                <Link href="/contact">
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
                <p className="text-lg text-ojpPrimary">Master Frontend and Backend technologies</p>
                <p className="text-lg text-ojpPrimary">to develop dynamic and responsive websites</p>
                <Link href="/contact">
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
                  src="/productdesign.jpg"
                  alt="faculty2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-2xl font-semibold text-ojpPrimary mb-2">Product Design (UI/UX)</h3>
                <p className="text-lg text-ojpPrimary">Learn the principle of user centered design to</p>
                <p className="text-lg text-ojpPrimary">create intutive and engaging products</p>
                <Link href="/contact">
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
  );
}