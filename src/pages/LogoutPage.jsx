import React from 'react';
import { useAuth } from '../hooks/useAuth';

export const LogoutPage = () => {
    const { logout } = useAuth();
    const onLogout = (e) => {
        e.preventDefault();
        logout();
    };
    return (
        <>
            <h1>Salir</h1>
            <form onSubmit={onLogout}>
                <label>Seguro de salir?</label>
                <button type='submit'>Salir</button>
            </form>
        </>
    );
};
