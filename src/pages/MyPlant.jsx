import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, } from 'react-router';

const MyPlant = () => {
    const {activeUser} = useContext(AuthContext);

    const email = activeUser?.email ;

    const [allPlant, setAllPlant] = useState([]);
  
    useEffect(()=>{
        fetch('http://localhost:3000/all-plants')
        .then(res => res.json())
        .then(data => {
            setAllPlant(data)
          })
      },[])
    

      const myPlantData = allPlant.filter((plant)=> plant.email === email);

      
    return (
        <div className="w-11/12 mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center py-10">
            {myPlantData.map((treePlant) => (
                <div
                key={treePlant._id}
                className="max-w-lg p-6 rounded-2xl shadow-md bg-white"
                >
                <div className="space-y-4">
                    <img
                    src={treePlant.image}
                    alt={treePlant.plantName}
                    className="block object-cover object-center w-full rounded-md h-72"
                    />
                    <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-green-700">
                        {treePlant.plantName}
                    </h3>
                    <p className="italic text-gray-600 text-sm">
                        Scientific Name: {treePlant.scientificName}
                    </p>
                    <p className="text-gray-700">{treePlant.description}</p>

                    <div className="pt-2 space-y-1 text-base">
                        <p><strong>Category:</strong> {treePlant.category}</p>
                        <p><strong>Care Level:</strong> {treePlant.careLevel}</p>
                        <p><strong>Watering Frequency:</strong> Every {treePlant.wateringFrequency} days</p>
                        <p><strong>Health Status:</strong> {treePlant.healthStatus}</p>
                        <p><strong>Last Watered:</strong> {treePlant.LastWateredDate}</p>
                        <p><strong>Next Watering:</strong> {treePlant.NextWateringDate}</p>
                    </div>
                    </div>

                    <div className="flex justify-between pt-4">
                    <Link to={`/update/${treePlant._id}`} className="btn w-1/3 bg-green-500 text-white rounded-md py-2">Update</Link>
                    <button className="btn w-1/3 bg-red-500 text-white rounded-md py-2">Delete</button>
                    </div>
                </div>
                </div>
            ))}
        </div>

    );
};

export default MyPlant;