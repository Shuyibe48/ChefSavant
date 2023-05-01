import React from 'react';
import Banner from '../components/Banner';
import Chefs from '../components/Chefs';
import RecipeCard from '../components/RecipeCard';

const Home = () => {
    return (
        <>
            <Banner />
            <Chefs />
            <RecipeCard />
        </>
    );
};

export default Home;