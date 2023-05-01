import React from 'react';

const Chefs = () => {
    const chefs = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=377&q=80',
            name: 'John Doe',
            experience: 10,
            recipes: 50,
            likes: 100,
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1595257841889-eca2678454e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            name: 'Jane Smith',
            experience: 15,
            recipes: 75,
            likes: 150,
        },
        {
            id: 3,
            image: 'https://plus.unsplash.com/premium_photo-1673830186124-1d3095b7d384?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80',
            name: 'Jane Smith',
            experience: 15,
            recipes: 75,
            likes: 150,
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
            name: 'Jane Smith',
            experience: 15,
            recipes: 75,
            likes: 150,
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            name: 'Jane Smith',
            experience: 15,
            recipes: 75,
            likes: 150,
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1572173838181-589fc8c0a10a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            name: 'Jane Smith',
            experience: 15,
            recipes: 75,
            likes: 150,
        }
    ];

    return (
        <div className="container px-4 lg:px-0 mx-auto py-8">
            <h2 className="text-4xl font-bold mb-8 text-center">Chefs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {chefs.map((chef) => (
                    <div className="bg-white rounded-md shadow-md p-4" key={chef.id}>
                        <img src={chef.image} alt={chef.name} className="w-full rounded-md mb-4" />
                        <h3 className="text-xl font-medium">{chef.name}</h3>
                        <p className="text-gray-500 mb-2">{chef.experience} years of experience</p>
                        <p className="text-gray-500 mb-2">{chef.recipes} recipes</p>
                        <p className="text-gray-500 mb-4">{chef.likes} likes</p>
                        <button className="bg-gray-800 text-white py-2 px-4 rounded-full transition-all duration-200 hover:bg-gray-900">View Recipes</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chefs;