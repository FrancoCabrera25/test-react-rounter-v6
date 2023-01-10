import { useState } from 'react';

import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { ProfilePage } from './pages/ProfilePage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { Menu } from './components/Menu';
import { LoginPage } from './pages/LoginPage';
import { LogoutPage } from './pages/LogoutPage';
import { AuthProvider } from './auth/AuthProvider';
import { ProtectedRoute } from './components/ProtectedRoute';
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <HashRouter>
                <AuthProvider>
                    <Menu />
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/blog' element={<BlogPage />}>
                            <Route path=':slug' element={<BlogDetailPage />} />
                        </Route>

                        <Route path='/login' element={<LoginPage />} />
                        <Route
                            path='/logout'
                            element={
                                <ProtectedRoute>
                                    <LogoutPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path='/profile'
                            element={
                                <ProtectedRoute>
                                    <ProfilePage />
                                </ProtectedRoute>
                            }
                        />
                        <Route path='*' element={<p>not found</p>} />
                    </Routes>
                </AuthProvider>
            </HashRouter>
        </>
    );
}

export default App;
