import React from 'react';
import Menubar from './Menubar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Menubar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Home;