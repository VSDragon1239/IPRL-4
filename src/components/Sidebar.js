import React from 'react';
import '../css/Sidebar.css';
import { NavLink } from 'react-router-dom';
// import {Button} from "react-bootstrap";

function Sidebar({ isOpen }) {
    return (
        <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <NavLink to="/" className="sidebar-item" title="Домой">🏠 {isOpen && <span>Домой</span>}</NavLink>
            <NavLink to={"/favorites"} className="sidebar-item" title="Избранное" >⭐ {isOpen && <span>Избранное</span>}</NavLink>
        </aside>
    );
}

export default Sidebar;


