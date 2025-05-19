import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../src/slider.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import hero from '../assets/hero.jpg'
import bg1 from '../assets/plantbg.jpg'
import hero1 from '../assets/hero1.jpg'
import bg2 from '../assets/plantbg1.jpg'
import hero2 from '../assets/hero2.jpg'
import bg3 from '../assets/plantbg2.jpg'


const Slider = () => {
    

    return (
        <div>
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="relative">
                            <div
                                className="absolute inset-0 rounded-b-xl mb-5"style={{background: `url(${bg1})`, backgroundSize: 'cover',backgroundPosition: 'center',filter: 'brightness(60%)',zIndex: 0,}}
                            ></div>
                            <div className="relative z-10 flex flex-col-reverse md:flex-row py-20 items-center px-8">
                                <div className="text-white md:px-10">
                                    <h1 className="md:text-3xl text-xl font-bold pt-5">
                                        Take the Guesswork Out of Plant Care with  Smart Tracking and Timely Reminders
                                    </h1>
                                    <p className="mt-4">
                                        GreenMind helps you manage watering, fertilizing, and plant health effortlessly—so your plants always thrive.
                                    </p>
                                    <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">Start Tracking Now</button>
                                </div>
                                <div className="">
                                <img className=' rounded-2xl' src={hero} alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                           <div className="relative">
                                    <div
                                        className="absolute inset-0 rounded-b-xl mb-5"style={{background: `url(${bg2})`, backgroundSize: 'cover',backgroundPosition: 'center',filter: 'brightness(60%)',zIndex: 0,}}
                                    ></div>
                                    <div className="relative z-10 flex flex-col-reverse md:flex-row py-20 items-center px-8">
                                        <div className="text-white md:px-10">
                                            <h1 className="md:text-3xl text-xl font-bold pt-5">
                                                Your All-in-One Companion for Healthy, Happy Houseplants Year-Round
                                            </h1>
                                            <p className="mt-4">
                                                Organize your plant routine, log care tasks, and never miss a watering day again with GreenMind.
                                            </p>
                                            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">Get Started Free</button>
                                        </div>
                                        <div className="">
                                        <img className=' rounded-2xl' src={hero1} alt="" />
                                        </div>
                                    </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                            <div className="relative">
                                        <div
                                            className="absolute inset-0 rounded-b-xl mb-5"style={{background: `url(${bg3})`, backgroundSize: 'cover',backgroundPosition: 'center',filter: 'brightness(60%)',zIndex: 0,}}
                                        ></div>
                                        <div className="relative z-10 flex flex-col-reverse md:flex-row py-20 items-center px-8">
                                            <div className="text-white md:px-10">
                                                <h1 className="md:text-3xl text-xl font-bold pt-5">
                                                    Simplify Plant Parenthood with Personalized Schedules and Progress Tracking
                                                </h1>
                                                <p className="mt-4">
                                                Whether you're a beginner or a plant pro, GreenMind keeps your indoor jungle thriving.
                                                </p>
                                                <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">Try GreenMind Today</button>
                                            </div>
                                            <div className="">
                                            <img className=' rounded-2xl' src={hero2} alt="" />
                                            </div>
                                        </div>
                            </div>
                    </SwiperSlide>
                </Swiper>
        </div>
    );
};

export default Slider;