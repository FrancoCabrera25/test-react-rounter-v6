import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (username) => {
        setUser({ username });
        navigate('/profile');
    };

    const logout = (username) => {
        setUser(null);
        navigate('/');
    };

    const auth = {
        user,
        login,
        logout
    };

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
