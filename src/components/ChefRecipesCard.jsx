import { useState } from "react";
import { StarIcon, HeartIcon } from '@heroicons/react/24/solid'


const RecipeCard = () => {

    const recipe = {
        image: 'https://panlasangpinoy.com/wp-content/uploads/2016/05/what-is-a-chef-de-cuisiine.jpg',
        chefName: "Chef John",
        recipeName: "Lemon Garlic Butter Shrimp",
        ingredients: ["1 lb. raw shrimp", "1/4 cup butter", "1 lemon, juiced", "4 cloves garlic, minced", "1/4 tsp. red pepper flakes", "Salt and pepper to taste"],
        cookingMethod: "1. Melt butter in a large skillet over medium heat. \n2. Add garlic and red pepper flakes and cook for 1-2 minutes. \n3. Add shrimp and lemon juice to the skillet and cook until shrimp turn pink, about 3-4 minutes. \n4. Season with salt and pepper to taste. Serve hot.",
        rating: 4.5,
        favorite: false
    }

    const [isFavorite, setIsFavorite] = useState(recipe.favorite);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img className="w-full h-48 object-cover" src={recipe.image} alt="" />
            <div className="p-4">
                <div className="font-bold text-lg">{recipe.chefName}</div>
                <div className="mt-2 text-gray-500 text-sm">
                    <span className="font-semibold">Ingredients: </span>
                    {recipe.ingredients.join(", ")}
                </div>
                <div className="mt-2 text-gray-500 text-sm">
                    <span className="font-semibold">Cooking Method: </span>
                    {recipe.cookingMethod}
                </div>
                <div className="mt-2 flex items-center">
                    <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="font-semibold text-gray-600">{recipe.rating.toFixed(1)}</span>
                </div>
                <button className={`mt-4 bg-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`} disabled={isFavorite === true} onClick={handleFavoriteClick}>
                    {isFavorite ? <HeartIcon className="h-6 w-6 text-pink-500"/> : <HeartIcon className="h-6 w-6 text-white"/>}
                </button>
            </div>
        </div>
    );
};

export default RecipeCard