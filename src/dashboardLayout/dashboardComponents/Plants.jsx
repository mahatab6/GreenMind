import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import leaf from '../../assets/leaf.png'
import Card from './Card';

const Plants = () => {
    const {activeUser} = useContext(AuthContext)
    return (
        <div className='bg-[#D9FBE5] px-5 min-h-screen'>
            <div className='flex items-center py-4'>
                <h2 className='text-2xl md:text-4xl font-bold dark:text-black'>Welcome back, {activeUser.displayName}!</h2>
                <img className='w-14' src={leaf} alt="" />
            </div>
            <p className='text-xl dark:text-black'>Here's what's happening with your plants today.</p>
            <Card/>
        </div>
    );
};

export default Plants;