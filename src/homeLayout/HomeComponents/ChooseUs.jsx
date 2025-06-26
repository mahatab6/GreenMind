import React, { useEffect } from 'react';
import leaf from '../../assets/leaf.png'
import growth from '../../assets/growth.png'
import reminder from '../../assets/reminder.png'
import plant from '../../assets/plant.png'
import secure from '../../assets/cyber-security.png'
import magic from '../../assets/magic.png'
import ux from '../../assets/ux.png'
import plantcenter from '../../assets/plantcenter.png'
import { Typewriter } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css';


const ChooseUs = () => {

    useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: 'linear', 
    
    });
  }, []);

    return (
        <div className='py-10 w-11/12 mx-auto'>

            <div className='flex items-center justify-center'>
                <img className='w-[30px]' src={leaf} alt="" />
                <h1 className='text-xl text-green-600'>Why Choose Us</h1>
            </div>

            <h1 className='text-2xl text-center md:text-4xl font-bold py-2'>

            <Typewriter
            words={['Why choose Green Mind']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            /></h1>

            <div className='hidden md:flex justify-center  md:pt-20  '>
                <div  data-aos="fade-right" className='w-100 space-y-5'>
                    <div className=' justify-items-center space-y-2'>
                        <img className='w-[100px]' src={growth} alt="" />
                        <h1 className='text-2xl text-center'>Smart Plant Tracking</h1>
                        <p className='text-base text-center'>GNever miss a watering day again! Automatically track and manage all your plants with real-time care suggestions.</p>
                    </div>
                    <div className=' justify-items-center space-y-2'>
                        <img className='w-[100px]' src={reminder} alt="" />
                        <h1 className='text-2xl text-center'>Timely Reminders</h1>
                        <p className='text-base text-center'>Get helpful notifications when it's time to water, fertilize, or check on your plant’s health.</p>
                    </div>
                    <div className=' justify-items-center space-y-2'>
                        <img className='w-[100px]' src={plant} alt="" />
                        <h1 className='text-2xl text-center'>Personalized Care Plans</h1>
                        <p className='text-base text-center'>Each plant is different. GreenMind tailors care recommendations based on species, sunlight, and watering needs.</p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-easing="linear">
                <img src={plantcenter} alt="" />
                </div>
                <div data-aos="fade-left" className='w-100 space-y-5'>
                    <div className=' justify-items-center space-y-2'>
                        <img className='w-[100px]' src={secure} alt="" />
                        <h1 className='text-2xl text-center'>Your Data—Always Secure</h1>
                        <p className='text-base text-center'>We value your privacy. GreenMind ensures your plant data is protected and accessible only by you—secure, simple, and stress-free.</p>
                    </div>
                    <div className=' justify-items-center space-y-2'>
                        <img className='w-[100px]' src={magic} alt="" />
                        <h1 className='text-2xl text-center'>Simple Tools, Big Results</h1>
                        <p className='text-base text-center'>From adding new plants to monitoring their health, GreenMind is packed with features that are easy to use and make a big impact on your plant care routine.</p>
                    </div>
                    <div className=' justify-items-center space-y-2'>
                        <img className='w-[100px]' src={ux} alt="" />
                        <h1 className='text-2xl text-center'>Designed for Everyday Plant Parents</h1>
                        <p className='text-base text-center'>Whether you care for one succulent or a jungle of ferns, GreenMind makes plant parenting effortless and enjoyable with tools that actually work.</p>
                    </div>
                </div>
            </div>

            <div className='md:hidden'>
                <div className=' space-y-5 px-2'>
                    <div className=' justify-items-center space-y-2'>
                        <img className='w-[100px]' src={growth} alt="" />
                        <h1 className='text-2xl text-center'>Smart Plant Tracking</h1>
                        <p className='text-base text-center'>GNever miss a watering day again! Automatically track and manage all your plants with real-time care suggestions.</p>
                    </div>
                    <div className=' justify-items-center space-y-2'>
                        <img className='w-[100px]' src={reminder} alt="" />
                        <h1 className='text-2xl text-center'>Timely Reminders</h1>
                        <p className='text-base text-center'>Get helpful notifications when it's time to water, fertilize, or check on your plant’s health.</p>
                    </div>
                    <div className=' justify-items-center space-y-2'>
                        <img className='w-[100px]' src={plant} alt="" />
                        <h1 className='text-2xl text-center'>Personalized Care Plans</h1>
                        <p className='text-base text-center'>Each plant is different. GreenMind tailors care recommendations based on species, sunlight, and watering needs.</p>
                    </div>
                </div>
                <div className=' space-y-5 px-2'>
                    <div className=' justify-items-center space-y-2'>
                        <img className='w-[100px]' src={secure} alt="" />
                        <h1 className='text-2xl text-center'>Your Data—Always Secure</h1>
                        <p className='text-base text-center'>We value your privacy. GreenMind ensures your plant data is protected and accessible only by you—secure, simple, and stress-free.</p>
                    </div>
                    <div className=' justify-items-center space-y-2'>
                        <img className='w-[100px]' src={magic} alt="" />
                        <h1 className='text-2xl text-center'>Simple Tools, Big Results</h1>
                        <p className='text-base text-center'>From adding new plants to monitoring their health, GreenMind is packed with features that are easy to use and make a big impact on your plant care routine.</p>
                    </div>
                    <div className=' justify-items-center space-y-2'>
                        <img className='w-[100px]' src={ux} alt="" />
                        <h1 className='text-2xl text-center'>Designed for Everyday Plant Parents</h1>
                        <p className='text-base text-center'>Whether you care for one succulent or a jungle of ferns, GreenMind makes plant parenting effortless and enjoyable with tools that actually work.</p>
                    </div>
                </div>
                 <img src={plantcenter} alt="" />
            </div>
        </div>
    );
};

export default ChooseUs;