import React from 'react';
import { PiPlantFill } from "react-icons/pi";
import { Link } from 'react-router';


const PlantsSnapshot = ({myPlantData}) => {
    const displayPlant = myPlantData.slice(0,3);
    console.log(displayPlant)
    return (
        <div className='bg-white p-5 rounded-2xl my-5'>
            <div className='flex items-center justify-between'>
                <div className='pb-5'>
                    <h2 className='text-3xl text-black flex items-center font-bold gap-2'><PiPlantFill className='text-green-500'/>My Plants Snapshot</h2>
                    <p className='text-black text-xl'>Your most recent plants</p>
                </div>
                <Link to="/my-plants" className="btn text-black bg-white">View All</Link>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                {
                displayPlant.map((plant, index) => <div className=' bg-white p-5 rounded-2xl border shadow-xl my-2 transition-all duration-300 hover:shadow-lg' key={index}>

                    <img className='w-80 rounded-xl' src={plant.image} alt="" />
                    <h2 className='text-xl font-bold text-black pt-4'>{plant.plantName}</h2>
                    <p className='text-base font-semibold text-black'>{plant.scientificName}</p>
                    <div className='flex items-center justify-between'>
                        <p className='text-base font-semibold text-black'>Next water date {plant.NextWateringDate}</p>
                        <Link to={`/plants-details/${plant._id}`} className='btn text-black bg-white'>View</Link>
                    </div>

                </div>)
            }
            </div>
        </div>
    );
};

export default PlantsSnapshot;