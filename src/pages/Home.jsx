import React from 'react';
import Menubar from './Menubar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Menubar />
            <Outlet />
        </>
    );
};

export default Home;