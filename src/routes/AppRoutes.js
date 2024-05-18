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
import Favorites from "../components/Favorites";
import ProfileHome from "../pages/Profile/ProfileHome";
import Gallery from "../pages/Profile/Gallery";
import Projects from "../pages/Profile/Projects";
import Portfolio from "../pages/Profile/Portfolio";
import Templates from "../pages/Profile/Templates";
import Training from "../pages/Profile/Training";
import Achievements from "../pages/Profile/Achievements";

const AppRoutes = () => {
    const { isAuth } = useAuth();


    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {isAuth ? (
                <>
                    <Route path="profile/" element={<Profile />} />
                    <Route path="profile/home" element={<ProfileHome />} />
                    <Route path="profile/gallery" element={<Gallery />} />
                    <Route path="profile/projects" element={<Projects />} />
                    <Route path="profile/portfolio" element={<Portfolio />} />
                    <Route path="profile/templates" element={<Templates />} />
                    <Route path="profile/training" element={<Training />} />
                    <Route path="profile/achievements" element={<Achievements />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/favorites" element={<Favorites />} />
                </>
            ) : (
                <>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/favorites" element={<Favorites />} />
                </>
            )}
        </Routes>
    );
};

export default AppRoutes
