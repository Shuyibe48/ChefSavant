import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import LazyLoad from 'react-lazy-load';

const Chefs = () => {
    const { chefs } = useContext(AuthContext)


    return (
        <div className="container px-4 lg:px-0 mx-auto py-8">
            <h2 className="text-center text-3xl my-12 font-bold md:text-4xl lg:text-5xl xl:text-6xl">Chefs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {chefs.map((chef) => (
                    <div className="bg-white rounded-md shadow-md p-4" key={chef.id}>
                        <LazyLoad>
                            <img src={chef.chefPicture} alt={chef.chefName} className="w-full rounded-md mb-4" />
                        </LazyLoad>
                        <h3 className="text-xl font-medium">{chef.chefName}</h3>
                        <p className="text-gray-500 mb-2">{chef.yearsOfExperience} years of experience</p>
                        <p className="text-gray-500 mb-2">{chef.recipes} recipes</p>
                        <p className="text-gray-500 mb-4">{chef.like} likes</p>
                        <Link to={`/chefrecipes/${chef.id}`} className="bg-gray-800 text-white py-2 px-4 rounded-full transition-all duration-200 hover:bg-gray-900">View Recipes</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chefs;