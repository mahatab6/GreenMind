import React, { useContext, useEffect, useState } from 'react';
import { PiPlant } from "react-icons/pi";
import { GiPlantWatering } from "react-icons/gi";
import { GrStatusGood } from "react-icons/gr";
import { CgDanger } from "react-icons/cg";
import { AuthContext } from '../../context/AuthContext';
import { format } from 'date-fns';
import CareTasks from './CareTasks';
import { SiSimpleanalytics } from "react-icons/si";
import { GoDotFill } from "react-icons/go";
import PlantsSnapshot from './PlantsSnapshot';
import PlantCareTips from './PlantCareTips';







const Card = () => {

    const [myPlant, setMyPlant] = useState([]);
    const {activeUser} = useContext(AuthContext);
    const email = activeUser?.email ;

    useEffect(()=>{
            fetch('http://localhost:3000/all-plants')
            .then(res => res.json())
            .then(data => {
                setMyPlant(data);
                
    
              })
    },[])

    const today = new Date();
    const formattedDate = format(today, 'yyyy-MM-dd');

    const myPlantData = myPlant.filter((plant)=> plant.email === email);
    const water = myPlantData.filter((plant)=> plant.NextWateringDate === formattedDate);
    const healthy = myPlantData.filter((plant)=> plant.healthStatus == "healthy");
    const care = myPlantData.filter((plant)=> plant.careLevel == "Difficult");
    const moderate = myPlantData.filter((plant)=> plant.careLevel == "Moderate");
    const easy = myPlantData.filter((plant)=> plant.careLevel == "Easy");
    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-5'>
                <div className='bg-[#E7FDEE] flex items-center gap-3 p-5 hover:shadow-2xl rounded-2xl border-green-500 border'>
                    <div>
                        <h2 className='text-2xl text-black'>Total Plants</h2>
                        <p className='text-3xl font-bold text-green-800 '>{myPlantData.length}</p>
                    </div>
                    <PiPlant size={35} className='text-green-500' />
                </div>
                <div className='bg-[#FFF0DD] flex items-center gap-3 p-5 hover:shadow-2xl rounded-2xl border-orange-400 border'>
                    <div>
                        <h2 className='text-2xl text-black'>Needs Water Today</h2>
                        <p className='text-3xl font-bold text-orange-400'>{water.length}</p>
                    </div>
                    <GiPlantWatering size={35} className='text-orange-400' />
                </div>
                <div className='bg-[#DDFCEC] flex items-center gap-3 p-5 hover:shadow-2xl rounded-2xl border-green-600 border'>
                    <div>
                        <h2 className='text-2xl text-black'>Healthy Plants</h2>
                        <p className='text-3xl font-bold text-green-800'>{healthy.length}</p>
                    </div>
                    <GrStatusGood size={35} className='text-green-600' />
                </div>
                <div className='bg-[#FEE9E9] flex items-center gap-3 p-5 hover:shadow-2xl rounded-2xl border-red-500 border'>
                    <div>
                        <h2 className='text-2xl text-black'>Plants at Risk</h2>
                        <p className='text-3xl font-bold text-red-500'>{care.length}</p>
                    </div>
                    <CgDanger size={35} className='text-red-500' />
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-9 gap-4 '>
                <div className='lg:col-span-7 border'>
                    <CareTasks  myPlantData= { myPlantData}/>

                    <div className='bg-white p-5 rounded-2xl my-5'>
                        <div className='pb-5'>
                            <h2 className='text-3xl text-black flex items-center font-bold gap-2'><SiSimpleanalytics />Plant Health Overview</h2>
                            <p className='text-black text-xl'>Distribution of plant health and care levels</p>
                        </div>
                        <div className=' space-y-2 md:flex justify-between gap-5'>
                            <div className='flex-1'>
                                <h2 className='text-2xl text-black'>Health Status</h2>
                                <div className='flex items-center justify-between pt-2'>
                                    <div>
                                        <p className='text-black text-base font-bold flex items-center'><GoDotFill className='text-green-500' size={30}/>Healthy</p>
                                        <p className='text-black text-base font-bold flex items-center'><GoDotFill className='text-yellow-300' size={30}/>Needs Attention</p>
                                        <p className='text-black text-base font-bold flex items-center'><GoDotFill className='text-red-500' size={30}/>Sick</p>
                                    </div>
                                    <div>
                                        <p className='text-black text-base font-bold'>{healthy.length}</p>
                                        <p className='text-black text-base font-bold'>{water.length}</p>
                                        <p className='text-black text-base font-bold'>{care.length}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex-1'>
                                <h2 className='text-2xl text-black'>Care Levels</h2>
                                <div className='flex items-center justify-between pt-2'>
                                    <div>
                                        <p className='text-black text-base font-bold flex items-center'><GoDotFill className='text-[#3B82F6]' size={30}/>Easy</p>
                                        <p className='text-black text-base font-bold flex items-center'><GoDotFill className='text-[#F97316]' size={30}/>Moderate</p>
                                        <p className='text-black text-base font-bold flex items-center'><GoDotFill className='text-violet-500' size={30}/>Difficult</p>
                                    </div>
                                    <div>
                                        <p className='text-black text-base font-bold'>{easy.length}</p>
                                        <p className='text-black text-base font-bold'>{moderate.length}</p>
                                        <p className='text-black text-base font-bold'>{care.length}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <PlantsSnapshot myPlantData= { myPlantData}/>
                </div>
                <div className='lg:col-span-2'>
                    <PlantCareTips/>
                    <h1 className='text-black'>right</h1>
                </div>
            </div>
        </div>
    );
};

export default Card;