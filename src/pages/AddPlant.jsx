import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';



const AddPlant = () => {

    const {activeUser} = useContext(AuthContext);

    const [lastWatered, setLastWatered] = useState(null);
    const [nextWatering, setNextWatering] = useState(null);

    const handleSubmit = (e) => {
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
        
        const fromData = {plantName,image,category,scientificName,description,careLevel,wateringFrequency, LastWateredDate,NextWateringDate, healthStatus,email,name  }

        fetch('hhttp://localhost:3000/add-plant',{
             method: "POST",
             headers: {
                    "Content-Type": "application/json",
                },
             body: JSON.stringify(fromData),
        })
        .then(res => res.json())
        .then(() => {
            Swal.fire({
            title: "Submit Done!",
            icon: "success",
            draggable: true
            });
            from.reset()
        })
    };


    return (
        <div className='w-11/12 mx-auto'>
            <Helmet>
            <title>Add plant | GreenMind</title>
            </Helmet>
            <div className='text-center space-y-2 pt-10'>
                <h1 className='text-xl md:text-3xl font-semibold'>Add a New Plant to Your Green Family</h1>
                <p className='text-base font-normal'>Keep your plant collection growing! Enter the details below to start tracking and caring for your newest leafy friend.</p>
            </div>

            <div className='py-10 '>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <fieldset className="fieldset">
                            <label className="block mb-2 text-xl">Plant Name</label>
                            <input type="text" name="plantname" required placeholder="Enter your plant name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="block mb-2 text-xl">Upload Image</label>
                            <input type="text" name="image" required placeholder="Enter your plant image" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label for="category" className="block mb-2 text-xl">Category</label>
                                <select className="w-full px-3 py-2 border rounded-md dark:border-gray-300 "   name="category" id="category">
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
                            <input type="text" name="scientificname"  placeholder="Your plant scientific name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="block mb-2 text-xl">Description</label>
                            <input type="text" name="description"  placeholder="Write your plant description" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label for="carelevel " className="block mb-2 text-xl">Care Level </label>
                                <select className="w-full px-3 py-2 border rounded-md dark:border-gray-300 "   name="carelevel" id="carelevel">
                                    <option value="">Choose your plant care level</option>
                                    <option value="Easy">Easy</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="Difficult">Difficult</option>
                                </select>
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="block mb-2 text-xl">Watering Frequency</label>
                            <input type="number" name="wateringfrequency" min="1" placeholder="Enter days" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="block mb-2 text-xl">Last Watered Date</label>
                            <DatePicker
                            selected={lastWatered}
                            onChange={(date) => setLastWatered(date)}
                            placeholderText="Select last watered date"
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
                                placeholderText="Select next watering date"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300"
                                dateFormat="yyyy-MM-dd"
                                minDate={lastWatered || new Date()} 
                                isClearable
                                />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label for="healthStatus" className="block mb-2 text-xl">Health Status</label>
                            <select className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " id="healthStatus" name="healthStatus" >
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
                            <label  className="block mb-2 text-xl">User Email {activeUser?<span className='text-xs gap-2'>Don't change your email</span>:'' }</label>
                            <input readOnly type="email" name="email"  placeholder="Enter your email" value={activeUser?.email || ''} className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="block mb-2 text-xl">User Name {activeUser?<span className='text-xs gap-2'>Don't change your user name</span> : ''}</label>
                            <input readOnly type="text" name="username"  placeholder="Enter your name" Value={activeUser?.displayName || ''} className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                        </fieldset>
                    </div>
                    
                    <div className='flex justify-center pt-5'>
                        <button type='submit' className='btn w-2/3 bg-green-500 hover:bg-green-600 cursor-pointer border-0'>Submit</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddPlant;