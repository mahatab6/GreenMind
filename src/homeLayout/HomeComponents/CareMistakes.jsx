import React from 'react';
import water from '../../assets/waterdrop.png'
import Light from '../../assets/sun.png'
import Pests from '../../assets/mosquito.png'
import Care from '../../assets/clock.png'
import 'aos/dist/aos.css';
import Aos from 'aos';
import Testimonial from './Testimonial';



const CareMistakes = () => {

    Aos.init();

    return (
        <div className='bg-[#E1FCED]'>
            <div>
                <div className='text-center py-5'>
                    <h2 className='text-4xl font-bold mb-4 dark:text-black'>Avoid Common Plant Care Mistakes</h2>
                    <p className='text-xl dark:text-black'>Learn from the most frequent plant care errors</p>
                </div>
                <div data-aos="fade-up" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5 '>
                    <div className=' justify-items-center'>
                        <img className='w-20 bg-[#FEE2E2] p-4 rounded-full' src={water} alt="" />
                       <h2 className='text-xl font-semibold py-2 dark:text-black'>Overwatering</h2>
                       <p className='text-base dark:text-black'>Most common cause of plant death</p>
                    </div>
                    <div className=' justify-items-center'>
                        <img className='w-20 bg-[#FEE2E2] p-4 rounded-full' src={Light} alt="" />
                       <h2 className='text-xl font-semibold py-2 dark:text-black'>Wrong Light Exposure</h2>
                       <p className='text-base dark:text-black'>Each plant has unique light needs</p>
                    </div>
                    <div className=' justify-items-center'>
                        <img className='w-20 bg-[#FEE2E2] p-4 rounded-full' src={Pests} alt="" />
                       <h2 className='text-xl font-semibold py-2 dark:text-black'>Ignoring Pests</h2>
                       <p className='text-base dark:text-black'>Early detection saves your plants</p>
                    </div>
                    <div className=' justify-items-center'>
                        <img className='w-20 bg-[#FEE2E2] p-4 rounded-full' src={Care} alt="" />
                       <h2 className='text-xl font-semibold py-2 dark:text-black'>Inconsistent Care</h2>
                       <p className='text-base dark:text-black'>Regular routine is key to success</p>
                    </div>
                </div>
            </div>

            <div>
                <div className='text-center py-5'>
                    <h2 className='text-4xl font-bold mb-4 dark:text-black'>What Plant Lovers Say</h2>
                    <p className='text-xl dark:text-black'>Real stories from our community</p>
                </div>
                <div>
                    <Testimonial/>
                </div>
            </div>
            
        </div>
    );
};

export default CareMistakes;