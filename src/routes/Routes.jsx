import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeLayout from "../layout/HomeLayout";
import ChefRecipes from "../components/ChefRecipes";
import ErrorPage from "../pages/ErrorPage";
import ContactPage from "../pages/ContactPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'chefrecipes/:id',
                element: <ChefRecipes />,
                loader: ({ params }) => fetch(`http://localhost:5000/chefinfo/${params.id}`)
            },
            {
                path: 'contact',
                element: <ContactPage />
            }
        ]
    },
]);

export default router