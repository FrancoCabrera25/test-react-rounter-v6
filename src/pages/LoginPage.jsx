import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const LoginPage = () => {
    const [username, setusername] = useState('');
    const { login, user } = useAuth();

    const onSubmit = (e) => {
        e.preventDefault();
        login(username);
    };
    if (user) {
       return <Navigate to='/profile' />;
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <label>Usuario</label>
                <input
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                />
                <button type='submit'>Login</button>
            </form>
        </>
    );
};
