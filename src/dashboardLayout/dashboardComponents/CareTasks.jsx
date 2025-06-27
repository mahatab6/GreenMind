import React from 'react';
import { MdOutlineDateRange } from "react-icons/md";
import drops from '../../assets/drops.png'
import { Link } from 'react-router';
import { format } from 'date-fns';


const CareTasks = ( {myPlantData}) => {

    const today = new Date();
    const formattedDate = format(today, 'yyyy-MM-dd');
    const water = myPlantData.filter((plant)=> plant.NextWateringDate === formattedDate);
    const care = myPlantData.filter((plant)=> plant.careLevel == "Difficult");
    
    return (
        <div className='bg-white p-5 rounded-2xl'>
            <div className='pb-5'>
                <h2 className='text-3xl text-black flex items-center font-bold'><MdOutlineDateRange />Today Care Tasks</h2>
                <p className='text-black text-xl'>Plants that need attention the today's</p>
            </div>
            {
                care.map((plant, index)=> <div key={index}>
                    <div className='flex items-center justify-between py-3 bg-[#FEE9E9] my-2 p-3 border border-red-500 rounded-2xl'>
                        <div className='flex items-center gap-2'>
                            <img className='w-14 bg-red-500 rounded-full p-2' src={drops} alt="" />
                            <div>
                                <h2 className='text-2xl font-semibold'>{plant.plantName}</h2>
                                <p className='text-xl'>Overdue!</p>
                            </div>
                        </div>
                        <Link to={`/plants-details/${plant._id}`} className='btn  bg-white text-black'>View</Link>
                    </div>
                </div>)
            }
            {
                water.map((plant, index)=> <div key={index}>
                    <div className='flex items-center justify-between py-3 bg-[#F0FDF4] my-2 p-3 border border-green-300 rounded-2xl'>
                        <div className='flex items-center gap-2'>
                            <img className='w-14 bg-green-500  rounded-full p-2' src={drops} alt="" />
                            <div>
                                <h2 className='text-2xl font-semibold'>{plant.plantName}</h2>
                                <p className='text-xl'>water need!</p>
                            </div>
                        </div>
                        <Link to={`/plants-details/${plant._id}`} className='btn bg-white text-black'>View</Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CareTasks;