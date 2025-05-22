import React from 'react';
import Slider from './Slider';
import NewPlant from './NewPlant';
import ChooseUs from './ChooseUs';
import PlantVideo from './PlantVideo';
import QuickStats from './QuickStats';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
      <div className='w-11/12 mx-auto'>
            <Helmet>
            <title>Home | GreenMind</title>
            </Helmet>
         <Slider/>
         <NewPlant/>
         <ChooseUs/>
         <PlantVideo/>
         <QuickStats/>
      </div>

    );
};

export default Home;