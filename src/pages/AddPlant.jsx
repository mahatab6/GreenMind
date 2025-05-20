import React from 'react';

const AddPlant = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-center space-y-2 pt-10'>
                <h1 className='text-xl md:text-3xl font-semibold'>Add a New Plant to Your Green Family</h1>
                <p className='text-base font-normal'>Keep your plant collection growing! Enter the details below to start tracking and caring for your newest leafy friend.</p>
            </div>

            <div className='py-10 '>
                <form>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <fieldset className="fieldset">
                            <label htmlFor="email" className="block mb-2 text-xl">Plant Name</label>
                            <input type="text" name="plantname"  placeholder="Enter your plant name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label htmlFor="email" for="category" className="block mb-2 text-xl">Category</label>
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
                            <label htmlFor="email" className="block mb-2 text-xl">Description</label>
                            <input type="text" name="description"  placeholder="Write your plant description" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label htmlFor="email" for="carelevel " className="block mb-2 text-xl">Care Level </label>
                                <select className="w-full px-3 py-2 border rounded-md dark:border-gray-300 "   name="carelevel" id="carelevel">
                                    <option value="">Choose your plant care level</option>
                                    <option value="Easy">Easy</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="Difficult">Difficult</option>
                                </select>
                        </fieldset>

                        <fieldset className="fieldset">
                            <label htmlFor="email" className="block mb-2 text-xl">Watering Frequency</label>
                            <input type="number" name="wateringfrequency" min="1" placeholder="Enter days" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label htmlFor="email" className="block mb-2 text-xl">Last Watered Date</label>
                            <input type="date" name="lastwater"  placeholder="Last plant watered date" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label htmlFor="email" className="block mb-2 text-xl">Next Watering Date</label>
                            <input type="date" name="nextwater"  placeholder="Next plant watering date" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label htmlFor="email" for="healthStatus" className="block mb-2 text-xl">Health Status</label>
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
                            <label htmlFor="email" className="block mb-2 text-xl">User Email</label>
                            <input type="email" name="email"  placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label htmlFor="email" className="block mb-2 text-xl">User Name</label>
                            <input type="text" name="name"  placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 " />
                        </fieldset>
                    </div>
                    
                    <div className='flex justify-center pt-5'>
                        <button className='btn w-2/3 '>Submit</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddPlant;