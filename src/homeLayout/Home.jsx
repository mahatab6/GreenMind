import React from 'react';
import Slider from './HomeComponents/Slider';
import NewPlant from './HomeComponents/NewPlant';
import ChooseUs from './HomeComponents/ChooseUs';
import PlantVideo from './HomeComponents/PlantVideo';
import QuickStats from './HomeComponents/QuickStats';
import { Helmet } from 'react-helmet';
import WeeklyPlant from './HomeComponents/WeeklyPlant';
import CareMistakes from './HomeComponents/CareMistakes';


const Home = () => {
    return (
      <div className='w-11/12 mx-auto'>
            <Helmet>
            <title>Home | GreenMind</title>
            </Helmet>
         <Slider/>
         <WeeklyPlant/>
         <NewPlant/>
         <CareMistakes/>
         <ChooseUs/>
         <PlantVideo/>
         <QuickStats/>
      </div>

    );
};

export default Home;