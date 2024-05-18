import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../css/Header.css'; // Подключаем стили для Header

function Header({ toggleSidebar }) {
    const { isAuth, setIsAuth } = useAuth();

    const handleThemeToggle = () => {
        alert('Theme toggle is not implemented yet.');
    };

    const handleLogout = () => {
        setIsAuth(false);
    };
    const [isOpen, setIsOpen] = useState(false);


    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <header className="header">
            <button className="sidebar-toggle icon-button" onClick={toggleSidebar}>☰</button>
            <div className="logo">3D-Dashboard</div>
            <div className="header-buttons">
                <input type="text" placeholder="Поиск" className="search-bar" />
                <div className="links">
                    {isAuth ? (
                        <>
                        <Link to="/messengers" className="messenger icon-button header-btn">✉</Link>
                        <div
                            className="profile-dropdown"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link to="/profile" className="icon-button header-btn">👤</Link>
                            {/* Показываем меню, если isOpen === true */}
                            {isOpen && (
                                <div className="dropdown-content menu-btn">
                                    <button onClick={handleLogout}>Выйти</button>
                                    {/* Другие пункты меню */}
                                </div>
                            )}
                        </div>
                        </>
                    ) : (
                    <>
                        <Link to="/login" className="auth-button">Войти</Link>
                        <Link to="/register" className="auth-button">Зарегистрироваться</Link>
                    </>
                )}
                </div>
                <button className="icon-button" onClick={handleThemeToggle}>🌙</button>
            </div>
        </header>
    );
}

export default Header;
