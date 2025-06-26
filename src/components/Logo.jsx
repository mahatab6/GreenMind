import React from 'react';
import green from '../assets/GreenMind.png'
import { Link } from 'react-router';


const Logo = () => {
    return (
        <>
        <Link to='/' className='flex items-center'>
            <img className='w-[50px] ' src={green} alt="" />
            <a className=" text-xl">GreenMind</a>
        </Link>
        </>
        
    );
};

export default Logo;