import React from 'react';
import { PiPlant } from "react-icons/pi";
import { GiPlantWatering } from "react-icons/gi";
import { GrStatusGood } from "react-icons/gr";
import { CgDanger } from "react-icons/cg";





const Card = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-5'>
            <div className='bg-[#E7FDEE] flex items-center gap-3 p-5 hover:shadow-2xl rounded-2xl border-green-500 border'>
                <div>
                    <h2 className='text-2xl text-black'>Total Plants</h2>
                    <p className='text-x text-black'>0</p>
                </div>
                <PiPlant size={35} className='text-green-500' />
            </div>
            <div className='bg-[#FFF0DD] flex items-center gap-3 p-5 hover:shadow-2xl rounded-2xl border-orange-400 border'>
                <div>
                    <h2 className='text-2xl text-black'>Needs Water Today</h2>
                    <p className='text-x text-black'>0</p>
                </div>
                <GiPlantWatering size={35} className='text-orange-400' />
            </div>
            <div className='bg-[#DDFCEC] flex items-center gap-3 p-5 hover:shadow-2xl rounded-2xl border-green-600 border'>
                <div>
                    <h2 className='text-2xl text-black'>Healthy Plants</h2>
                    <p className='text-x text-black'>0</p>
                </div>
                <GrStatusGood size={35} className='text-green-600' />
            </div>
            <div className='bg-[#FEE9E9] flex items-center gap-3 p-5 hover:shadow-2xl rounded-2xl border-red-500 border'>
                <div>
                    <h2 className='text-2xl text-black'>Plants at Risk</h2>
                    <p className='text-x text-black'>0</p>
                </div>
                <CgDanger size={35} className='text-red-500' />
            </div>
        </div>
    );
};

export default Card;