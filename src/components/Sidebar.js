import React from 'react';
import '../css/Sidebar.css';
import {matchPath, NavLink, useLocation} from 'react-router-dom';
// import {Button} from "react-bootstrap";
import homeImage from "../images/home.png"
import FavoritesImage from "../images/favorites.png"

function Sidebar({ isOpen }) {
<<<<<<< HEAD
    return (
        <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <NavLink to="/" className="sidebar-item" title="Главная">
                <div className="image-link-block">
                    <img src={homeImage} alt="Домашняя страница"/>
                </div>
                {isOpen && <span>Главная</span>}
            </NavLink>
=======
>>>>>>> newReverseBranch

    const location = useLocation();
    const isProfilePage = !!matchPath({ path: '/profile/*', end: false }, location.pathname);

    return (
        <>
            {isProfilePage ? (
                <>
                    {isOpen ? (
                        <>
                            <aside className="sidebar open">
                                <NavLink to="/" className="sidebar-item" title="Главная">
                                    <div className="image-link-block">
                                        <img src={homeImage} alt="Домашняя страница"/>
                                    </div>
                                    <span>Главная</span>
                                </NavLink>

                                <NavLink to={"/favorites"} className="sidebar-item" title="Избранное" >
                                    <div className="image-link-block">
                                        <img src={FavoritesImage} alt="Домашняя страница"/>
                                    </div>
                                    <span>Избранное</span>
                                </NavLink>
                            </aside>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                </>
            ) : (
                <>
                    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                        <NavLink to="/" className="sidebar-item" title="Главная">
                            <div className="image-link-block">
                                <img src={homeImage} alt="Домашняя страница"/>
                            </div>
                            {isOpen && <span>Главная</span>}
                        </NavLink>

                        <NavLink to={"/favorites"} className="sidebar-item" title="Избранное" >
                            <div className="image-link-block">
                                <img src={FavoritesImage} alt="Домашняя страница"/>
                            </div>
                            {isOpen && <span>Избранное</span>}
                        </NavLink>
                    </aside>
                </>
            )}
        </>
    );
}

export default Sidebar;


