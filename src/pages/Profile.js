import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProfileHome from './Profile/ProfileHome';
import Gallery from './Profile/Gallery';
import Projects from './Profile/Projects';
import Templates from './Profile/Templates';
import Training from './Profile/Training';
import Achievements from './Profile/Achievements';
import Portfolio from './Profile/Portfolio';
import '../css/Profile.css';

function Profile() {
    return (
        <div className="profile">
            <div className="profile-header">
                <img src="profile-banner.jpg" alt="Profile Banner" className="profile-banner" />
                <img src="profile-picture.jpg" alt="Profile" className="profile-picture" />
                <h2>Username</h2>
                <p>@userid</p>
            </div>
            <div className="profile-sidebar">
                <Link to="home" className="profile-sidebar-item">Главная</Link>
                <Link to="gallery" className="profile-sidebar-item">Галерея</Link>
                <Link to="projects" className="profile-sidebar-item">Проекты</Link>
                <Link to="portfolio" className="profile-sidebar-item">Портфолио</Link>
                <Link to="templates" className="profile-sidebar-item">Шаблоны</Link>
                <Link to="training" className="profile-sidebar-item">Обучение</Link>
                <Link to="achievements" className="profile-sidebar-item">Достижения</Link>
            </div>
            <div className="profile-content">
                <Routes>
                    <Route path="home" element={<ProfileHome />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="templates" element={<Templates />} />
                    <Route path="training" element={<Training />} />
                    <Route path="achievements" element={<Achievements />} />
                </Routes>
            </div>
        </div>
    );
}

export default Profile;
