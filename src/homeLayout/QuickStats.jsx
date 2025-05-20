import React from 'react';
import users from '../assets/crowd-of-users.png'
import tracked from '../assets/route.png'
import success from '../assets/customer-success.png'
import bell from '../assets/bell.png'
import CountUp from 'react-countup';

const QuickStats = () => {
    return (
        <div>
            <div className='text-center space-y-3 py-5'>
                <h1 className='text-2xl md:text-4xl font-bold text-center py-2'>Growing With Every Leaf</h1>
                <p className='text-xl font-medium'>We’re proud to help a growing community of plant lovers stay <br /> organized and connected to their green friends. From thousands of plants <br /> tracked to high user satisfaction, GreenMind is making plant care smarter, easier, and more joyful—every day.</p>
            </div>

            <div className='grid md:grid-cols-2 xl:grid-cols-4 justify-items-center py-10 space-y-3'>
                <div className='flex items-center gap-2'>
                    <img className='w-20' src={users} alt="" />
                    <div>
                        <h1 className='lg:text-7xl text-3xl font-bold'><CountUp delay={3} end={300} />+</h1>
                        <p className='text-2xl font-medium'>users</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-20' src={tracked} alt="" />
                    <div>
                        <h1 className='lg:text-7xl text-3xl font-bold'><CountUp delay={2} end={1000}/>+</h1>
                        <p className='text-2xl font-medium'>plants tracked</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-20' src={success} alt="" />
                    <div>
                        <h1 className='lg:text-7xl text-3xl font-bold'><CountUp delay={2} end={98} />%</h1>
                        <p className='text-2xl font-medium'>satisfaction</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-20' src={bell} alt="" />
                    <div>
                        <h1 className='lg:text-7xl text-3xl font-bold'><CountUp delay={3} end={500} />+</h1>
                        <p className='text-2xl font-medium'>Reminders Sent</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickStats;