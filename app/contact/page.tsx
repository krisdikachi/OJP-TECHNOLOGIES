"use client";


import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [course, setCourse] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { name, email, message, course });
    };

    return (
        <>
            <Navbar />
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-ojpPrimary mb-4">Contact Us</h2>
                        <p className="text-lg text-ojpSecondary">We&apos;d love to hear from you! Please fill out the form below to get in touch with us.</p>
                    </div>
                    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">
                                    Select Course
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="course"
                                    value={course}
                                    onChange={(e) => setCourse(e.target.value)}
                                >
                                    <option value="">Select a course</option>
                                    <option value="cybersecurity">Cybersecurity</option>
                                    <option value="data-science">Data Science</option>
                                    <option value="data-analytics">Data Analytics</option>
                                    <option value="ios-development">iOS Development</option>
                                    <option value="android-development">Android Development</option>
                                    <option value="game-development">Game Development</option>
                                    <option value="robotics-ai">Robotics and AI</option>
                                    <option value="roofing-technology">Roofing Technology</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    rows={5}
                                    placeholder="Your Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-ojpPrimary hover:bg-ojpSecondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <header className="text-4xl text-center font-bold text-ojpPrimary">Locate Us</header>
            

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
        </>
    );
};

export default Contact;