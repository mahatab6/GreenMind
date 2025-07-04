import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useParams } from 'react-router';
import Loading from './Loading';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const Update = () => {

    const {id} = useParams();
    const [allPlant, setAllPlant] = useState([]);
    const [lastWatered, setLastWatered] = useState(null);
    const [nextWatering, setNextWatering] = useState(null);
    
    useEffect(()=>{
        fetch('hhttp://localhost:3000/all-plants')
        .then(res => res.json())
        .then(data => {
            setAllPlant(data)
        })
    },[])

    const plantUpdate = allPlant.find((plants)=> plants._id === id);

    if (!plantUpdate) {
    return <Loading/>;}


    const {LastWateredDate,NextWateringDate,careLevel,category,description,email,healthStatus,image,name,plantName,scientificName,wateringFrequency} = plantUpdate ;

    const handleUpdate = (e) => {
        e.preventDefault();

        const from = e.target;
        const plantName = from.plantname.value;
        const image = from.image.value;
        const category = from.category.value;
        const scientificName = from.scientificname.value;
        const description = from.description.value;
        const careLevel = from.carelevel.value;
        const wateringFrequency = from.wateringfrequency.value;
        const LastWateredDate = lastWatered ? format(lastWatered, "yyyy-MM-dd") : "";
        const NextWateringDate = nextWatering ? format(nextWatering, "yyyy-MM-dd") : "";
        const healthStatus = from.healthStatus.value;
        const email = from.email.value;
        const name = from.username.value;
        
        const updateData = {plantName,image,category,scientificName,description,careLevel,wateringFrequency, LastWateredDate,NextWateringDate, healthStatus,email,name  }

        fetch(`hhttp://localhost:3000/all-plants/${id}`,{
             method: "PUT",
             headers: {
                    "Content-Type": "application/json",
                },
             body: JSON.stringify(updateData),
        })
        .then(res => res.json())
        .then(() =>{
            Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your plant successful updated",
            showConfirmButton: false,
            timer: 1500
            });
        })
    }

    

    return (
        <div className='w-11/12 mx-auto'>
            <Helmet>
                <title>Plant Update | GreenMind</title>
            </Helmet>
            <div className='text-center space-y-2 pt-10'>
                <h1 className='text-xl md:text-3xl font-semibold'>Update Plant Information</h1>
                <p className='text-base font-normal'>Need to make a change? Keep your plant details up to date to ensure accurate care <br /> reminders and better tracking. Edit the information below to reflect <br /> your plant’s current condition and care needs.</p>
            </div>

            <div className='py-10 '>
                <form onSubmit={handleUpdate}>
                     <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                         <fieldset className="fieldset">
                             <label className="block mb-2 text-xl">Plant Name</label>
                             <input type="text" name="plantname" defaultValue={plantName} placeholder="Enter your plant name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300" />
                         </fieldset>
 
                         <fieldset className="fieldset">
                             <label className="block mb-2 text-xl">Upload Image</label>
                             <input type="text" name="image"  placeholder="Enter your plant image" defaultValue={image} className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                         </fieldset>
 
                         <fieldset className="fieldset">
                             <label for="category" className="block mb-2 text-xl">Category</label>
                                 <select className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " defaultValue={category}  name="category" id="category">
                                     <option value="">Choose your category</option>
                                     <option value="Succulent">Succulent</option>
                                     <option value="Fern">Fern</option>
                                     <option value="Flowering">Flowering</option>
                                     <option value="Foliage">Foliage</option>
                                     <option value="Cactus">Cactus</option>
                                     <option value="Indoor">Indoor</option>
                                     <option value="Outdoor">Outdoor</option>
                                     <option value="Bonsai">Bonsai</option>
                                     <option value="Herb">Herb</option>
                                     <option value="Other">Other</option>
                                 </select>
                         </fieldset>
 
                         <fieldset className="fieldset">
                             <label className="block mb-2 text-xl">Scientific Name</label>
                             <input type="text" name="scientificname" defaultValue={scientificName}  placeholder="Your plant scientific name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                         </fieldset>
 
                         <fieldset className="fieldset">
                             <label className="block mb-2 text-xl">Description</label>
                             <input type="text" name="description" defaultValue={description}  placeholder="Write your plant description" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                         </fieldset>
 
                         <fieldset className="fieldset">
                             <label for="carelevel " className="block mb-2 text-xl">Care Level </label>
                                 <select className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " defaultValue={careLevel}  name="carelevel" id="carelevel">
                                     <option value="">Choose your plant care level</option>
                                     <option value="Easy">Easy</option>
                                     <option value="Moderate">Moderate</option>
                                     <option value="Difficult">Difficult</option>
                                 </select>
                         </fieldset>
 
                         <fieldset className="fieldset">
                             <label className="block mb-2 text-xl">Watering Frequency</label>
                             <input type="number" name="wateringfrequency" min="1" defaultValue={wateringFrequency} placeholder="Enter days" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                         </fieldset>
 
                         <fieldset className="fieldset">
                             <label className="block mb-2 text-xl">Last Watered Date</label>
                             <DatePicker
                             selected={lastWatered}
                             onChange={(date) => setLastWatered(date)}
                             placeholderText={LastWateredDate}
                             className="w-full px-3 py-2 border rounded-md dark:border-gray-300"
                             dateFormat="yyyy-MM-dd"
                             maxDate={new Date()} 
                             isClearable
                             />
                         </fieldset>
 
                         <fieldset className="fieldset">
                             <label className="block mb-2 text-xl">Next Watering Date</label>
                               <DatePicker
                                 selected={nextWatering}
                                 onChange={(date) => setNextWatering(date)}
                                 placeholderText={NextWateringDate}
                                 className="w-full px-3 py-2 border rounded-md dark:border-gray-300"
                                 dateFormat="yyyy-MM-dd"
                                 minDate={lastWatered || new Date()} 
                                 isClearable
                                 />
                         </fieldset>
 
                         <fieldset className="fieldset">
                             <label for="healthStatus" className="block mb-2 text-xl">Health Status</label>
                             <select className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " defaultValue={healthStatus} id="healthStatus" name="healthStatus" >
                                 <option value="">Select Health Status</option>
                                 <option value="healthy">Healthy</option>
                                 <option value="needs_water">Needs Water</option>
                                 <option value="needs_attention">Needs Attention</option>
                                 <option value="overwatered">Overwatered</option>
                                 <option value="wilting">Wilting</option>
                                 <option value="diseased">Diseased</option>
                                 <option value="recovering">Recovering</option>
                                 <option value="dead">Dead</option>
                             </select>
                         </fieldset>
 
                         <fieldset className="fieldset">
                             <label  className="block mb-2 text-xl">User Email</label>
                             <input readOnly type="email" name="email"  placeholder="Enter your email" value={email} className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                         </fieldset>
                         <fieldset className="fieldset">
                             <label className="block mb-2 text-xl">User Name</label>
                             <input readOnly type="text" name="username"  placeholder="Enter your name" value={name} className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                         </fieldset>
                     </div>
                     
                     <div className='flex justify-center pt-5'>
                         <button type='submite' className='btn w-2/3 bg-green-500 cursor-pointer border-0 hover:bg-green-600 '>Update</button>
                     </div>
 
                </form>
            </div>           
            
        </div>
    );
};

export default Update;