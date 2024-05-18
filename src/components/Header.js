import React from 'react';
import '../css/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">3D-Dashboard</div>
            <input type="text" placeholder="Поиск" className="search-bar" />
            <button className="login-btn">Войти</button>
            <button className="signup-btn">Зарегистрироваться</button>
        </header>
    );
}

export default Header;
