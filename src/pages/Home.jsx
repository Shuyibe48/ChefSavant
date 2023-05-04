import React, { useContext } from 'react';
import Banner from '../components/Banner';
import Chefs from '../components/Chefs';
import RecipeCard from '../components/RecipeCard';
import { AuthContext } from '../provider/AuthProvider';
import { RotateLoader } from 'react-spinners';
import FeaturedRecipe from '../components/FeaturedRecipe';



const Home = () => {
    const {chefs} = useContext(AuthContext)

    return (
        <>
            {
                !chefs ? <div className='py-36 text-center'>
                    <RotateLoader color="#36d7b7" />
                </div> :
                    <>
                        <Banner />
                        <Chefs />
                        <RecipeCard />
                        <FeaturedRecipe/>
                    </>
            }
        </>
    );
};

export default Home;