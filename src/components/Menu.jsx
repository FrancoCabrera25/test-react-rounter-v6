import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
const ROUTES = [
    {
        text: 'Home',
        to: '/',
        isPrivate: false,
    },
    {
        text: 'Blog',
        to: '/blog',
        isPrivate: false,
    },
    {
        text: 'Profile',
        to: '/profile',
        isPrivate: true,
    },
    {
        text: 'Login',
        to: '/login',
        publicOnly: true,
        isPrivate: false,
    },
    {
        text: 'Logout',
        to: '/logout',
        isPrivate: true,
    },
];

export const Menu = () => {
    const { user } = useAuth();
    return (
        <nav>
            <ul>
                {ROUTES.map(({ to, text, isPrivate, publicOnly }) => {
                    if (isPrivate && !user) return null;

                    if (publicOnly && user) return null;
                        
                    return (
                        <li key={text}>
                            <NavLink
                                to={to}
                                style={({ isActive }) => ({
                                    color: isActive ? 'red' : 'blue',
                                })}>
                                {text}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
