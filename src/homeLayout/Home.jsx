import React from 'react';
import Slider from './Slider';
import NewPlant from './NewPlant';


const Home = () => {
    return (
      <div className='w-11/12 mx-auto'>
         <Slider/>
         <NewPlant/>
      </div>

    );
};

export default Home;