import React from 'react';
import leaf from '../assets/leaf.png'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";




const Contact = () => {
    return (
        <div>
            <div className='flex items-center justify-center pt-10 gap-2'>
                <img className='w-[30px]' src={leaf} alt="" />
                <h1 className='text-xl text-green-600'>Contact</h1>
            </div>

            <h1 className='md:text-4xl text-2xl font-bold text-center py-5'>Get in Touch</h1>

            <div>
                <section className="py-6">
                    <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                        <div className="py-6 md:py-0 md:px-6">
                            <div className="space-y-4">
                                <p className="flex items-center gap-2">
                                    <FaLocationDot size={45} className=" text-green-700 " />
                                   <div>
                                        <p className='text-3xl'>Address</p>
                                        <p className='xl'>Fake address, 9999 CityDhaka 102, 8000 sent behaibior utl <br /> 1216, road 45 house of street</p>
                                   </div>
                                </p>
                                <p className="flex items-center gap-2">
                                    <IoCall size={45} className=" text-green-700 " />
                                   <div>
                                        <p className='text-3xl'>Lets Talk us</p>
                                        <p className='xl'>Fake address, 9999 City</p>
                                   </div>
                                </p>
                                <p className="flex items-center gap-2">
                                    <IoMdMail  size={45} className=" text-green-700 " />
                                   <div>
                                        <p className='text-3xl'>Mail</p>
                                        <p className='xl'>greenmind@company.com</p>
                                   </div>
                                </p>
                               
                            </div>
                        </div>
                        <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                            <label className="block">
                                <span className="mb-1">Full name</span>
                                <input type="text" placeholder="Enter your name" className="block p-3 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                            </label>
                            <label className="block">
                                <span className="mb-1">Email address</span>
                                <input type="email" placeholder="Enter your email" className="block p-3 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                            </label>
                            <label className="block">
                                <span className="mb-1">Message</span>
                                <textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
                            </label>
                            <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-green-600 text-white">Submit</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;