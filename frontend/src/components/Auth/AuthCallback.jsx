import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthCallback = () => {
    const { isLoading, error, isAuthenticated } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            window.location.href = '/feedback';
        }
    }, [isAuthenticated]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return null;
};

export default AuthCallback;
