import React from 'react';
import { NavLink } from 'react-router';
import green from '../assets/GreenMind.png'

const Navbar = () => {
      const link = (
            <>
            <li>
                <NavLink className={({isActive}) => isActive ? "border-b-2": '' }>Home</NavLink>
            </li>
            <li> 
                <NavLink className={({isActive}) => isActive ? "border-b-2": '' }>All Plants</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "border-b-2": '' }>Add Plant</NavLink>
                
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "border-b-2": '' }>My Plants</NavLink>
            </li>
            </>
        )
    return (
        <div className='w-11/12 mx-auto '>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-[50px]' src={green} alt="" />
                        <a className=" text-xl">GreenMind</a>
                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                    <a className="btn">Register</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;