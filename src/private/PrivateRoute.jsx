import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import { RotateLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (user) {
        return children
    }

    if (loading) {
        return <div className='py-36 text-center'>
            <RotateLoader color="#36d7b7" />
        </div>
    }


    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;