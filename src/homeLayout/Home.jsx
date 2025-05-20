import React from 'react';
import Slider from './Slider';
import NewPlant from './NewPlant';
import ChooseUs from './ChooseUs';


const Home = () => {
    return (
      <div className='w-11/12 mx-auto'>
         <Slider/>
         <NewPlant/>
         <ChooseUs/>
      </div>

    );
};

export default Home;