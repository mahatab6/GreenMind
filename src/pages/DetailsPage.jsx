import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from './Loading';

const DetailsPage = () => {

    const {id} = useParams();
    const [allPlant, setAllPlant] = useState ([]);
     const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('http://localhost:3000/all-plants')
        .then(res => res.json())
        .then(data =>{
            setAllPlant(data);
            setLoading(false);

        });
    },[])

    const singlePlant = allPlant.find((plant)=>plant._id === id);

    if (loading) {
    return <Loading/>;
     }

    const {image, plantName,scientificName, category,careLevel,wateringFrequency,healthStatus,NextWateringDate,LastWateredDate} = singlePlant ;

    return (
        <div className='md:py-20'>
            <div className="max-w-4xl mx-auto p-4 space-y-6 bg-white rounded-xl shadow-md">
                <img
                    src={image}
                    alt=""
                    className="w-full h-64 object-cover rounded-xl shadow"
                />

                <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-green-700">{plantName}</h3>
                    <p className="text-md italic text-gray-600">{scientificName}</p>
                    <p className="text-gray-700">{`"Air-purifying plant with green and white stripes."`}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-lg text-gray-800">
                    <p><strong>Category:</strong> {category}</p>
                    <p><strong>Care Level:</strong> {careLevel}</p>
                    <p><strong>Watering Frequency:</strong> {wateringFrequency}</p>
                    <p><strong>Health Status:</strong> <span className="text-red-600">{healthStatus}</span></p>
                    <p><strong>Last Watered:</strong> {LastWateredDate}</p>
                    <p><strong>Next Watering:</strong> {NextWateringDate}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;