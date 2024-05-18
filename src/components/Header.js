import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../css/Header.css'; // Подключаем стили для Header

function Header() {
    const { isAuth, setIsAuth } = useAuth();

    const handleThemeToggle = () => {
        alert('Theme toggle is not implemented yet.');
    };

    const handleLogout = () => {
        setIsAuth(false);
    };

    return (
        <header className="header">
            <button className="sidebar-toggle">☰</button>
            <div className="logo">3D-Dashboard</div>
            <input type="text" placeholder="Поиск" className="search-bar" />
            {isAuth ? (
                <>
                    <button className="icon-button">✉️</button>
                    <div className="profile-dropdown">
                        <button className="icon-button">👤</button>
                        {/* Здесь можно добавить выпадающее меню с действиями профиля */}
                        <div className="dropdown-menu">
                            <button onClick={handleLogout}>Выйти</button>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <Link to="/login" className="auth-button">Войти</Link>
                    <Link to="/register" className="auth-button">Зарегистрироваться</Link>
                </>
            )}
            <button className="icon-button" onClick={handleThemeToggle}>🌙</button>
        </header>
    );
}

export default Header;
