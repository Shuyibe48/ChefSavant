import React from 'react';
import Menubar from '../pages/Menubar';
import Footer from '../pages/Footer';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <>
            <Menubar />
            <Outlet />
            <Footer />
        </>
    );
};

export default HomeLayout;