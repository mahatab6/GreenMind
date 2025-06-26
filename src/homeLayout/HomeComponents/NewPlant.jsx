import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'; 

const NewPlant = () => {
 
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/all-plants')
      .then((res) => res.json())
      .then((data) => {
        
        setDisplay(data.slice(0, 6)); 
      });
  }, []);

  return (

    <div className='py-10 '>
      <div className='text-center'>
        <h2 className='text-4xl font-bold'>Latest Plant Additions</h2>
        <p className='text-xl py-2'>Discover what fellow plant lovers are growing</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center py-10">
        {display.map((treePlant) => (
          <div
            key={treePlant._id}
            className="max-w-lg p-6 rounded-2xl shadow-md bg-white hover:shadow-2xl"
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
                  <p className="text-xl font-normal text-black">
                    Category: {treePlant.category}
                  </p>
                  <p className="text-xl font-normal text-black">
                    Care Level: {treePlant.careLevel}
                  </p>
                  <p className="text-xl font-normal text-black">
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
      <div className=' text-center'>
        <Link to="/all-plants" className='btn w-40 bg-green-500 hover:bg-green-600 text-white border-0 shadow-md'>All Plants</Link>
      </div>
    </div>
  );
};

export default NewPlant;
