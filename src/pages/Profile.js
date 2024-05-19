import React from 'react';
import {Link, matchPath, useLocation} from 'react-router-dom';
import ProfileBackground from '../images/profile/background.png'
import ProfilePicture from '../images/profile/main-image.jfif'

import '../css/Profile.css';
import ProfileHome from "./Profile/ProfileHome";

function Profile({isOpenSidebar}) {

    const location = useLocation();
    const isProfileHomePage = !!matchPath(location.pathname, '/profile/home/');
    console.log(isProfileHomePage)

    return (
        <div className="profile">
            <div className="profile-header">
                <img src={ProfileBackground} alt="Profile Banner" className={isOpenSidebar ? ("profile-banner-1") : ("profile-banner-2")} />
                <div className="user-icon-text-block">
                    <img src={ProfilePicture} alt="Profile" className="profile-picture" />
                    <div className="user-names">
                            <h2>VSDragon1239</h2>
                            <p>@userid</p>
                    </div>
                </div>

            </div>
            <div className="profile-sidebar">
                <Link to="/profile/home" className="profile-sidebar-item">Главная</Link>
                <Link to="/profile/gallery" className="profile-sidebar-item">Галерея</Link>
                <Link to="/profile/projects" className="profile-sidebar-item">Проекты</Link>
                <Link to="/profile/portfolio" className="profile-sidebar-item">Портфолио</Link>
                <Link to="/profile/templates" className="profile-sidebar-item">Шаблоны</Link>
                <Link to="/profile/training" className="profile-sidebar-item">Обучение</Link>
                <Link to="/profile/achievements" className="profile-sidebar-item">Достижения</Link>
            </div>
            <div className="profile-main-link-block">
                {isProfileHomePage ? (
                    <>
                        <ProfileHome />
                    </>
                ) : (
                    <>

                    </>
                )}
            </div>
        </div>
    );
}

export default Profile;
