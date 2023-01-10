import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const ProfilePage = () => {
    const { user } = useAuth();

    return (
        <>
            <span>ProfilePage name: {user.username}</span>
        </>
    );
};
