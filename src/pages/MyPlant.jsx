import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const MyPlant = () => {
    const {activeUser} = useContext(AuthContext);

    const email = activeUser?.email ;

    const [allPlant, setAllPlant] = useState([]);
  
    useEffect(()=>{
        fetch('http://localhost:3000/all-plants')
        .then(res => res.json())
        .then(data => {
            setAllPlant(data)
          })
      },[])
    

      const myPlantData = allPlant.filter((plant)=> plant.email === email);

      
   

    return (
        <div>
           
        </div>
    );
};

export default MyPlant;