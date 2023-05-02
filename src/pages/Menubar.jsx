import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menubar = () => {

    const signOut = () => {
        console.log('hi')
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const user = { displayName: 'Fahim Ahmed', photoURL: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link to="/">
                    <span className="font-semibold text-xl tracking-tight">ChefSavant</span>
                </Link>
            </div>
            <div className="block lg:hidden">
                <button onClick={handleMenuClick} className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3a3 3 0 013-3h14a3 3 0 010 6H3a3 3 0 01-3-3zm0 8a3 3 0 013-3h14a3 3 0 010 6H3a3 3 0 01-3-3zm0 8a3 3 0 013-3h14a3 3 0 010 6H3a3 3 0 01-3-3z" /></svg>
                </button>
            </div>
            <div className={`w-full ${isMenuOpen ? 'block' : 'hidden'} lg:block flex-grow lg:flex lg:items-center lg:w-auto`}>
                <div className="text-sm lg:flex-grow">
                    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                        Home
                    </Link>
                    <Link to="/blog" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                        Blog
                    </Link>
                </div>
                <div className="flex items-center">
                    {user ? (
                        <>
                            <div className="relative profile-picture">
                                <img className="h-8 w-8 rounded-full cursor-pointer" src={user.photoURL || defaultProfilePicture} alt={user.displayName || 'Profile picture'} />
                                {user.displayName && (
                                    <div className="absolute profile-name top-0 left-full -ml-1 mt-2 px-2 py-1 bg-white rounded-lg shadow-lg">
                                        {user.displayName}
                                    </div>
                                )}
                            </div>
                            <button className="ml-4 px-4 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white" onClick={signOut}>
                                Log Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-gray-200 hover:text-white mr-4">
                                Log In
                            </Link>
                            <Link to="/register" className="px-4 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Menubar;