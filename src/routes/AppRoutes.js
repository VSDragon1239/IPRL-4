import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
// import ProfileHome from '../pages/Profile/ProfileHome';
// import Gallery from '../pages/Profile/Gallery';
// import Projects from '../pages/Profile/Projects';
// import Portfolio from '../pages/Profile/Portfolio';
// import Templates from '../pages/Profile/Templates';
// import Training from '../pages/Profile/Training';
// import Achievements from '../pages/Profile/Achievements';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRoutes = () => {
    const { isAuth } = useAuth();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {isAuth ? (
                <>
                    <Route path="/profile/" element={<Profile />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </>
            ) : (
                <>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </>
            )}
        </Routes>
    );
};

export default AppRoutes
