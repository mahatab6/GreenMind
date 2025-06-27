import React from 'react';
import Fiddleleaf from '../../assets/Fiddleleaf Fig.jpg'
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from 'react-router';


const WeeklyPlant = () => {
    return (
        <div className='py-10 bg-[#D5EAE4]'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold text-green-600'>Plant of the Week</h2>
                <p className='text-xl text-gray-600 py-2'>Our featured plant pick for this week</p>
            </div>
            <div className=''>
                <div className='lg:flex justify-center py-5'>
                    <img className='w-2xl rounded-2xl p-2' src={Fiddleleaf} alt="" />
                    <div className='p-6 flex flex-col justify-cente space-y-4'>
                        <div>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium" >Tropical</span>
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium" >Moderate</span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900" >Fiddleleaf Fig</h3>
                        <p className="text-gray-600 mb-6" >Perfect for adding dramatic flair to any room with its iconic split leaves</p>

                        <h4 className="font-semibold text-gray-900 mb-3">Quick Care Tips:</h4>
                        <ul>
                            <li className='flex items-center text-xl gap-1'><FaRegLightbulb className='text-orange-300'/>Loves bright, indirect light</li>
                            <li className='flex items-center text-xl gap-1'><FaRegLightbulb className='text-orange-300'/>Water when top inch of soil is dry</li>
                            <li className='flex items-center text-xl gap-1'><FaRegLightbulb className='text-orange-300'/>Provide a moss pole for climbing support</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeeklyPlant;