import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Loading from './Loading';
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { Helmet } from 'react-helmet';

const AllPlants = () => {

    const [allPlant, setAllPlant] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('hhttp://localhost:3000/all-plants')
        .then(res => res.json())
        .then(data => {
            setAllPlant(data);
            setLoading(false);
        })
    },[])

    if(loading){
        return <Loading/>;
    }

    const handleSort = (field, order) => {
        setLoading(true); 
        fetch(`hhttp://localhost:3000/all-plants?sortBy=${field}&order=${order}`)
            .then(res => res.json())
            .then(data => {
                setAllPlant(data);
                setLoading(false);
            });
    };



    return (
        <div className='w-11/12 mx-auto py-10'>
            <Helmet>
            <title>All plant | GreenMind</title>
            </Helmet>
            <div className='text-center space-y-2 pb-10'>
                <h1 className='text-xl md:text-3xl font-semibold'>All Your Plants in One Place</h1>
                <p className='text-base font-normal'>Keep track of your green friends with ease! Below is a list of all your plants, <br /> showing essential care information at a glance. You can sort them by next watering <br /> date or care level to prioritize your plant care routine.</p>
            </div>

            <div>
                    <div className=" p-2 mx-auto sm:p-4 dark:text-gray-800 ">
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-xs">
                                <thead className="dark:bg-gray-300 ">
                                    <tr className="text-center ">
                                        <th className="p-3 ">No:</th>
                                        <th className="p-3 ">Photo</th>
                                        <th className="p-3 ">Plant name</th>
                                        <th className="p-3 ">Category</th>
                                        <th className="p-3 ">Watering frequency</th>
                                        <th className="p-3"><div className='flex gap-3 items-center justify-center'>Next Watering Date  <span><FaSortUp size={25} className="cursor-pointer hover:text-green-600 active:scale-110 transition" onClick={() => handleSort("NextWateringDate", "asc")}/> <FaSortDown size={25} className="cursor-pointer hover:text-green-600 active:scale-110 transition" onClick={() => handleSort("NextWateringDate", "desc")}/></span></div> </th>
                                        <th className="p-3 ">Actions</th>
                                    </tr>
                                </thead>

                                {
                                    allPlant.map((plant,index)=>
                                            <tbody key={plant._id || index} >
                                                <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                                    <td className="p-3 justify-items-center">
                                                        <p>{index + 1 }</p>
                                                    </td>
                                                    <td className="p-3 ">
                                                          <div className="avatar flex justify-center">
                                                                <div className="mask mask-squircle h-12 w-12">
                                                                    <img
                                                                    src={plant.image}
                                                                    alt="" />
                                                                </div>
                                                            </div>
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
                                                    <td className="p-3">
                                                        <div className="flex justify-center">
                                                            <Link
                                                            to={`/plants-details/${plant._id}`}
                                                            className="btn w-full bg-green-500 text-white border-0 shadow-md hover:bg-green-600 cursor-pointer"
                                                            >
                                                            View Details
                                                            </Link>
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