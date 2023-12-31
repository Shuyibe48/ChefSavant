import React from "react";
import ChefRecipesCard from "./ChefRecipesCard";
import { useLoaderData } from "react-router-dom";

const ChefRecipes = () => {
    const chefInfo = useLoaderData()
    const { chefBio, chefName, chefPicture, like, recipes, yearsOfExperience, chefRecipes } = chefInfo

    return (
        <>
            <h2 className="text-4xl mt-12 font-bold mb-8 text-center">Chef Recipes</h2>
            <div className="bg-gray-100 mb-12 flex flex-col md:flex-row md:h-96 md:items-center">
                <div className="md:w-1/2 h-full">
                    <img
                        src={chefPicture}
                        alt="Chef Banner"
                        className="object-cover h-full w-full"
                    />
                </div>
                <div className="md:w-1/2 p-4">
                    <h1 className="text-4xl font-bold text-gray-700 mb-4">{chefName}</h1>
                    <p className="text-gray-600 text-lg mb-4">
                        Chef Bio: {chefBio}
                    </p>
                    <div className="flex items-center mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-red-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                        <p className="text-gray-600 text-lg mr-6">Likes: {like}</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-blue-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        <p className="text-gray-600 text-lg mr-6">Number of Recipes: {recipes}</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-green-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                        <p className="text-gray-600 text-lg">Years of Experience: {yearsOfExperience}</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-4xl font-bold mb-8 text-center">Top Recipes</h2>
                <div className="container my-12 mx-auto lg:grid grid-cols-3 gap-4">
                    {
                        chefRecipes.map(rcp => <ChefRecipesCard
                            key={rcp.id}
                            chefRecipe={rcp}
                        />)
                    }
                </div>
            </div>
        </>
    );
};

export default ChefRecipes;