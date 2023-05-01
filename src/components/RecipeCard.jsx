import React from 'react';

const RecipeCard = () => {
    return (
        <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="Food"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 w-full p-4 bg-white bg-opacity-90 rounded-lg">
                        <div className="text-lg font-bold mb-2">Recipe Title</div>
                        <div className="flex items-center justify-between">
                            <div className="text-gray-600 font-medium">$10.99</div>
                            <button className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1516684542079-927175cedbb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="Food"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 w-full p-4 bg-white bg-opacity-90 rounded-lg">
                        <div className="text-lg font-bold mb-2">Recipe Title</div>
                        <div className="flex items-center justify-between">
                            <div className="text-gray-600 font-medium">$12.99</div>
                            <button className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
