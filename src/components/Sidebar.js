import React from 'react';
import '../css/Sidebar.css';
import { NavLink } from 'react-router-dom';
// import {Button} from "react-bootstrap";
import homeImage from "../images/home.png"
import FavoritesImage from "../images/favorites.png"

function Sidebar({ isOpen }) {
    return (
        <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <NavLink to="/" className="sidebar-item" title="Домой">
                <div className="image-link-block">
                    <img src={homeImage} alt="Домашняя страница"/>
                </div>
                {isOpen && <span>Домой</span>}
            </NavLink>

            <NavLink to={"/favorites"} className="sidebar-item" title="Избранное" >
                <div className="image-link-block">
                    <img src={FavoritesImage} alt="Домашняя страница"/>
                </div>
                    {isOpen && <span>Избранное</span>}
            </NavLink>
    </aside>
    );
}

export default Sidebar;


