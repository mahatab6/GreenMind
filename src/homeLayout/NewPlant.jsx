import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'; 

const NewPlant = () => {
 
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    fetch('https://plant-care-server-flax.vercel.app/all-plants')
      .then((res) => res.json())
      .then((data) => {
        
        setDisplay(data.slice(0, 6)); 
      });
  }, []);

  return (
    
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center py-10">
      {display.map((treePlant) => (
        <div
          key={treePlant._id}
          className="max-w-lg p-6 rounded-2xl shadow-md bg-white"
        >
          <div className="space-y-4">
            <img
              src={treePlant.image}
              alt=''
              className="block object-cover object-center w-full rounded-md h-72"
            />
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-green-700">
                Plant name: {treePlant.plantName}
              </h3>
              <div className=" items-center justify-between">
                <p className="text-xl font-normal">
                  Category: {treePlant.category}
                </p>
                <p className="text-xl font-normal">
                  Care Level: {treePlant.careLevel}
                </p>
                <p className="text-xl font-normal">
                  Watering frequency: {treePlant.wateringFrequency}
                </p>
              </div>
            </div>
            <Link
              to={`/plants-details/${treePlant._id}`}
              className="btn w-full bg-green-500 shadow-md border-0  text-white hover:bg-green-600"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewPlant;
