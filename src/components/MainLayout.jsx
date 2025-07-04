import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;