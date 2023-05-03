import { useState } from "react";
import { StarIcon, HeartIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RecipeCard = ({ chefRecipe }) => {

    console.log(chefRecipe)
    const { chefRatings, cookingMethod, favorite, ingredients, recipeName, image } = chefRecipe

    const [isFavorite, setIsFavorite] = useState(favorite);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    const notify = () => toast(`${recipeName} added on your favorite list!`);

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img className="w-full h-48 object-cover" src={image} alt="" />
            <div className="p-4">
                <div className="font-bold text-lg">{recipeName}</div>
                <div className="mt-2 text-gray-500 text-sm">
                    <span className="font-semibold">Ingredients: </span>
                    {ingredients.map(i => <li>{i}</li>)}
                </div>
                <div className="mt-2 text-gray-500 text-sm">
                    <span className="font-semibold">Cooking Method: </span>
                    {cookingMethod}
                </div>
                <div className="mt-2 flex items-center">
                    <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="font-semibold text-gray-600">{chefRatings.toFixed(1)}</span>
                </div>
                <div onClick={notify}>
                    <button className={`mt-4 bg-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`} disabled={isFavorite === true} onClick={handleFavoriteClick}>
                        {isFavorite ? <HeartIcon className="h-6 w-6 text-pink-500" /> : <HeartIcon className="h-6 w-6 text-white" />}
                    </button>
                        <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default RecipeCard