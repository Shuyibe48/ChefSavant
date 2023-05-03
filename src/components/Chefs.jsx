import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Chefs = () => {
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/chefinfo')
        .then(res => res.json())
        .then(data => setChefs(data))
    }, [])

    // const chefs = [
    //     {
    //         id: 1,
    //         image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=377&q=80',
    //         name: 'John Doe',
    //         experience: 10,
    //         recipes: 50,
    //         likes: 100,
    //         recipe: {
    //             image: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg',
    //             chefName: "Chef John",
    //             recipeName: "Lemon Garlic Butter Shrimp",
    //             ingredients: ["1 lb. raw shrimp", "1/4 cup butter", "1 lemon, juiced", "4 cloves garlic, minced", "1/4 tsp. red pepper flakes", "Salt and pepper to taste"],
    //             cookingMethod: "1. Melt butter in a large skillet over medium heat. \n2. Add garlic and red pepper flakes and cook for 1-2 minutes. \n3. Add shrimp and lemon juice to the skillet and cook until shrimp turn pink, about 3-4 minutes. \n4. Season with salt and pepper to taste. Serve hot.",
    //             rating: 4.5,
    //             favorite: false
    //         }
    //     },
    //     {
    //         id: 2,
    //         image: 'https://images.unsplash.com/photo-1595257841889-eca2678454e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    //         name: 'Jane Smith',
    //         experience: 15,
    //         recipes: 75,
    //         likes: 150,
    //     },
    //     {
    //         id: 3,
    //         image: 'https://plus.unsplash.com/premium_photo-1673830186124-1d3095b7d384?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80',
    //         name: 'Jane Smith',
    //         experience: 15,
    //         recipes: 75,
    //         likes: 150,
    //     },
    //     {
    //         id: 4,
    //         image: 'https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
    //         name: 'Jane Smith',
    //         experience: 15,
    //         recipes: 75,
    //         likes: 150,
    //     },
    //     {
    //         id: 5,
    //         image: 'https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    //         name: 'Jane Smith',
    //         experience: 15,
    //         recipes: 75,
    //         likes: 150,
    //     },
    //     {
    //         id: 6,
    //         image: 'https://images.unsplash.com/photo-1572173838181-589fc8c0a10a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    //         name: 'Jane Smith',
    //         experience: 15,
    //         recipes: 75,
    //         likes: 150,
    //     }
    // ];

    return (
        <div className="container px-4 lg:px-0 mx-auto py-8">
            <h2 className="text-4xl font-bold mb-8 text-center">Chefs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {chefs.map((chef) => (
                    <div className="bg-white rounded-md shadow-md p-4" key={chef.id}>
                        <img src={chef.chefPicture} alt={chef.chefName} className="w-full rounded-md mb-4" />
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