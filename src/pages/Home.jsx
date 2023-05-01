import React from 'react';
import Menubar from './Menubar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <>
            <Banner/>
        </>
    );
};

export default Home;