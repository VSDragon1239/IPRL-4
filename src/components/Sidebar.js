import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Sidebar.css';

function Sidebar() {
    return (
        <aside className="sidebar">
            <NavLink to="/" exact activeClassName="active">Главная</NavLink>
            <NavLink to="/gallery" activeClassName="active">Галерея</NavLink>
            <NavLink to="/projects" activeClassName="active">Проекты</NavLink>
            <NavLink to="/portfolio" activeClassName="active">Портфолио</NavLink>
            <NavLink to="/templates" activeClassName="active">Шаблоны</NavLink>
            <NavLink to="/training" activeClassName="active">Обучение</NavLink>
            <NavLink to="/achievements" activeClassName="active">Достижения</NavLink>
            <NavLink to="/profile" activeClassName="active">Профиль</NavLink>
        </aside>
    );
}

export default Sidebar;
