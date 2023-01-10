import { AuthContext } from '../auth/AuthProvider';
import { useContext } from 'react';
export const useAuth = () => {
    const { user, login, logout } = useContext(AuthContext);

    return {
        user,
        login,
        logout,
    };
};
