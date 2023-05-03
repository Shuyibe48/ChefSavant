import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Blog = () => {
    const location = useLocation();

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10">
            <h2 className="text-4xl font-bold mb-8 text-center">Blog</h2>
            <div className="mb-6 md:mb-8 lg:mb-10">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6">The Joy of Cooking</h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-500">Cooking is an art form that brings joy to many people around the world. From simple home-cooked meals to elaborate feasts, the act of cooking and sharing food with loved ones is a universal experience that connects us all.</p>
            </div>
            <div className="mb-6 md:mb-8 lg:mb-10">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6">The Power of Spices</h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-500">Spices are the secret ingredient that can take a dish from ordinary to extraordinary. They add depth, flavor, and complexity to our favorite dishes, and can even have health benefits. From cumin and coriander to turmeric and cinnamon, there's a world of spices waiting to be explored.</p>
            </div>
            <div className="mb-6 md:mb-8 lg:mb-10">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6">The Comfort of Home-Cooked Meals</h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-500">There's nothing quite like the comfort of a home-cooked meal. Whether it's a classic comfort food like mac and cheese or a family recipe passed down through generations, the act of preparing and enjoying a meal in the comfort of your own home can be deeply satisfying.</p>
            </div>
            <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6">The Adventure of Trying New Foods</h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-500">Trying new foods can be a thrilling adventure. Whether it's exploring exotic flavors from around the world or trying a new cuisine for the first time, the experience of discovering new foods can expand your palate and open up new culinary horizons.</p>
            </div>



            <nav className="flex justify-between items-center bg-gray-800 text-white py-4 px-8">
                <div className="flex items-center">
                    <h1 className="text-lg font-bold">ChefSavant</h1>
                </div>
                <div className="flex items-center">
                    <Link className={`mr-4 ${location.pathname === '/' ? 'text-blue-500 font-bold' : 'text-white hover:text-blue-500'}`} to="/">Home</Link>
                    <Link className={`mr-4 ${location.pathname === '/blog' ? 'text-blue-500 font-bold' : 'text-white hover:text-blue-500'}`} to="/blog">Blog</Link>
                </div>
            </nav>



        </div>
    );
};

export default Blog;

