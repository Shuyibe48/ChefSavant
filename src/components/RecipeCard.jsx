import React from 'react';

const RecipeCard = () => {
    return (
        <>
            <h2 className="text-center text-3xl my-12 font-bold md:text-4xl lg:text-5xl xl:text-6xl">Recipe Card</h2>
            <div className="container mx-auto flex flex-wrap justify-center">
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Food"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 w-full p-4 bg-white bg-opacity-90 rounded-lg">
                            <div className="text-lg font-bold mb-2">Grilled vegetables</div>
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
                            <div className="text-lg font-bold mb-2">Vegetable stir-fry </div>
                            <div className="flex items-center justify-between">
                                <div className="text-gray-600 font-medium">$12.99</div>
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
                            src="https://images.unsplash.com/photo-1523813301608-f54a198f6b5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            alt="Food"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 w-full p-4 bg-white bg-opacity-90 rounded-lg">
                            <div className="text-lg font-bold mb-2">Roasted vegetable salad </div>
                            <div className="flex items-center justify-between">
                                <div className="text-gray-600 font-medium">$13.57</div>
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
                            src="https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                            alt="Food"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 w-full p-4 bg-white bg-opacity-90 rounded-lg">
                            <div className="text-lg font-bold mb-2">Chicken Alfredo </div>
                            <div className="flex items-center justify-between">
                                <div className="text-gray-600 font-medium">$18.45</div>
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
                            src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Food"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 w-full p-4 bg-white bg-opacity-90 rounded-lg">
                            <div className="text-lg font-bold mb-2">Chicken Parmesan</div>
                            <div className="flex items-center justify-between">
                                <div className="text-gray-600 font-medium">$23.87</div>
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
                            src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Food"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 w-full p-4 bg-white bg-opacity-90 rounded-lg">
                            <div className="text-lg font-bold mb-2">Beef Stroganoff </div>
                            <div className="flex items-center justify-between">
                                <div className="text-gray-600 font-medium">$67.79</div>
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
                            src="https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Food"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 w-full p-4 bg-white bg-opacity-90 rounded-lg">
                            <div className="text-lg font-bold mb-2">Beef Stir-Fry</div>
                            <div className="flex items-center justify-between">
                                <div className="text-gray-600 font-medium">$112.99</div>
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
                            src="https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                            alt="Food"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 w-full p-4 bg-white bg-opacity-90 rounded-lg">
                            <div className="text-lg font-bold mb-2">Mushroom Risotto</div>
                            <div className="flex items-center justify-between">
                                <div className="text-gray-600 font-medium">$14.99</div>
                                <button className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecipeCard;
