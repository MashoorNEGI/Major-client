import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const withAuth = (Component) => {
    const AuthenticatedComponent = (props) => {
        const isAuthenticated = localStorage.getItem('Data') !== null;

        if (isAuthenticated) {
            return <Component {...props} />;
        } else {
            toast.error('You do not have permission to access this page');
            return <Navigate to={'/'} />;
        }
    };

    return AuthenticatedComponent;
};

export default withAuth;
