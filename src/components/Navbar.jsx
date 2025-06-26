import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import ThemeToggle from './ThemeToggle';
import { AuthContext } from '../context/AuthContext';
import { Bounce, toast } from 'react-toastify';
import Logo from './Logo';

const Navbar = () => {
        const {activeUser, logOut} = useContext(AuthContext)
        const navigate = useNavigate();
        const link = (
        <>
            <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "border-b-2" : ""}>
                Home
            </NavLink>
            </li>
            <li>
            <NavLink to="/all-plants" className={({ isActive }) => isActive ? "border-b-2" : ""}>
                All Plants
            </NavLink>
            </li>

            {activeUser?.email && (
            <>
                <li>
                <NavLink to="/add-plant" className={({ isActive }) => isActive ? "border-b-2" : ""}>
                    Add Plant
                </NavLink>
                </li>
                <li>
                <NavLink to="/my-plants" className={({ isActive }) => isActive ? "border-b-2" : ""}>
                    My Plants
                </NavLink>
                </li>
            </>
            )}
        </>
        );


        
        
        const handlelogOut = () =>{
            logOut()
            .then(() => {
                toast('Logout Done', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    });
                    navigate('/');
                })
        }

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
                        className="menu menu-sm dropdown-content space-y-1 rounded-box z-1 bg-white mt-3 w-52 p-2 shadow">
                        {link}
                        {
                        activeUser?<>
                        <Link onClick={()=>{handlelogOut()}} className=" inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">LogOut</Link>
                        </>:
                        <>
                        <Link to="/login" className=" inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">LogIn</Link>
                        <Link to="/register" className=" inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">Register</Link>
                        </>
                        }
                    </ul>
                    </div>
                    <Logo/>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {link}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <ThemeToggle/>
                    {
                        activeUser && <>
                        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "border-b-2" : ""}>Dashboard</NavLink>
                        </>
                    }
                    {
                        activeUser && activeUser.displayName ? (
                            <Link to="/profile">
                            <img 
                                className=" w-10 h-10 rounded-full border-2 border-green-500 "
                                src={activeUser.photoURL || "/default-avatar.png"}
                                alt=""
                                title={activeUser.displayName}
                            />
                            </Link>
                        ) : <span className="loading loading-ring loading-xs"></span>
                    }

                    {
                        activeUser? <Link onClick={()=>{handlelogOut()}} className=" hidden lg:flex bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">LogOut</Link>: <>
                        <Link to="/login" className=" hidden lg:flex bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">LogIn</Link>

                        <Link to="/register" className="hidden lg:flex  bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">Register</Link>
                        </>
                        
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;