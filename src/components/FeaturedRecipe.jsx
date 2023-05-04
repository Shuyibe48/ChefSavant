import React from 'react';

const FeaturedRecipe = () => {
    return (
        <div className="container mx-auto px-4 py-6 md:py-8 lg:py-10 xl:py-12">
            <h2 className="text-3xl my-12 font-bold md:text-4xl lg:text-5xl xl:text-6xl">Featured Recipe</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                    <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Recipe 1" className="w-full h-48 object-cover" />
                    <div className="px-4 py-2">
                        <h3 className="text-xl font-bold mb-2">Grilled Steak with Chimichurri Sauce</h3>
                        <p className="text-gray-700">Tender grilled steak served with a tangy and flavorful Chimichurri sauce, made with fresh herbs and garlic. Perfect for a summer cookout.</p>
                    </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                    <img src="https://images.unsplash.com/photo-1606791422814-b32c705e3e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full h-48 object-cover" />
                    <div className="px-4 py-2">
                        <h3 className="text-xl font-bold mb-2">Roasted Vegetable Tart</h3>
                        <p className="text-gray-700">A delicious and colorful tart made with roasted vegetables, creamy goat cheese, and a flaky pastry crust. Perfect for a vegetarian main course or appetizer.</p>
                    </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                    <img src="https://images.unsplash.com/photo-1543738066-f1b819c5f69d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80" alt="Recipe 3" className="w-full h-48 object-cover" />
                    <div className="px-4 py-2">
                        <h3 className="text-xl font-bold mb-2">Mediterranean Stuffed Peppers</h3>
                        <p className="text-gray-700">Colorful bell peppers stuffed with a flavorful mixture of ground beef, rice, herbs, and spices, and baked to perfection. A healthy and satisfying meal for any day of the week.</p>
                    </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                    <img src="https://images.unsplash.com/photo-1653136774559-e7f0897d0413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Recipe 4" className="w-full h-48 object-cover" />
                    <div className="px-4 py-2">
                        <h3 className="text-xl font-bold mb-2">Spicy Thai Noodle Soup</h3>
                        <p className="text-gray-700">A comforting and spicy soup made with rice noodles, tender chicken, and an aromatic broth infused with lemongrass, ginger, and chili. Perfect for a cold winter day.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedRecipe;