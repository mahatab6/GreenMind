import React, { useEffect, useState } from 'react';

const AllPlants = () => {

    const [allPlant, setAllPlant] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/all-plants')
        .then(res => res.json())
        .then(data => {
            setAllPlant(data)
        })
    },[])

    console.log(allPlant);

    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-center space-y-2 py-10'>
                <h1 className='text-xl md:text-3xl font-semibold'>All Your Plants in One Place</h1>
                <p className='text-base font-normal'>Keep track of your green friends with ease! Below is a list of all your plants, <br /> showing essential care information at a glance. You can sort them by next watering <br /> date or care level to prioritize your plant care routine.</p>
            </div>

            <div>
                    <div className=" p-2 mx-auto sm:p-4 dark:text-gray-800 ">
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-xs">
                                <thead className="dark:bg-gray-300">
                                    <tr className="text-center">
                                        <th className="p-3 ">No:</th>
                                        <th className="p-3 ">Plant name</th>
                                        <th className="p-3 ">Category</th>
                                        <th className="p-3 ">Watering frequency</th>
                                        <th className="p-3 ">Next Watering Date</th>
                                        <th className="p-3 ">Care Level</th>
                                        <th className="p-3 ">Actions</th>
                                        
                                    </tr>
                                </thead>

                                {
                                    allPlant.map((plant,index)=>
                                            <tbody>
                                                <tr key={plant._id || index} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                                    <td className="p-3 justify-items-center">
                                                        <p>{index + 1 }</p>
                                                    </td>
                                                    <td className="p-3 justify-items-center">
                                                        <p>{plant.plantName}</p>
                                                    </td>
                                                    <td className="p-3 justify-items-center">
                                                        <p>{plant.category}</p>
                                                        
                                                    </td>
                                                    <td className="p-3 justify-items-center">
                                                        <p>{plant.wateringFrequency}</p>
                                                    </td>
                                                    <td className="p-3 justify-items-center">
                                                        <p>{plant.NextWateringDate}</p>
                                                    </td>
                                                    <td className="p-3 justify-items-center">
                                                        <p>{plant.careLevel}</p>
                                                    </td>
                                                    <td className="p-3">
                                                        <div className="flex justify-center">
                                                            <button className="btn">View Details</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                    )
                                }
                            </table>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default AllPlants;