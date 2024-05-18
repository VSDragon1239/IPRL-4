import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link to="profile/home" className="profile-sidebar-item">Главная</Link>
                <Link to="profile/gallery" className="profile-sidebar-item">Галерея</Link>
                <Link to="profile/projects" className="profile-sidebar-item">Проекты</Link>
                <Link to="profile/portfolio" className="profile-sidebar-item">Портфолио</Link>
                <Link to="profile/templates" className="profile-sidebar-item">Шаблоны</Link>
                <Link to="profile/training" className="profile-sidebar-item">Обучение</Link>
                <Link to="profile/achievements" className="profile-sidebar-item">Достижения</Link>
            </div>
        </div>
    );
}

export default Profile;
