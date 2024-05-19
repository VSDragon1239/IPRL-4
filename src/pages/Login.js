// src/pages/Login.js
import React, {useEffect} from 'react';
import { useAuth } from '../context/AuthContext';
import '../css/Login.css';
import {useLocation, useNavigate} from "react-router-dom"; // Подключаем стили для Login

function Login({location}) {
    const { setIsAuth } = useAuth();

    const navigate = useNavigate()

    const handleLogin = () => {
        // Логика входа пользователя
        setIsAuth(true);
    };

    useEffect(() => {
        console.log('Локация     ', location);
    }, [location]);

    return (
        <div className="login">
            <div className="login-Background-image">
                <img src="/" alt=""/>
            </div>
            <div className="login-Main-Block-Background-image">
                <div className="login-Main-Background-image">
                    <img src="" alt=""/>
                </div>
            </div>
            <div className="login-Main-Block">
                <div className="login-Main-Image">
                    <img src="" alt=""/>
                </div>

                <div className="login-Main-Form">

                    <div className="login-Main-Text">
                        <h1>Войти</h1>
                    </div>

                    <div className="login-Inputs-Block">
                        <div className="login-input">
                            <p>Введите логин</p>
                            <input type="username"/>
                        </div>
                        <div className="login-input">
                            <p>Введите пароль</p>
                            <input type="password"/>
                        </div>
                        <div className="login-WithOut-input-grid">
                                <a className="element-login"  href="https://google/account.com" target="_blank" rel="noreferrer">
                                    <img src="../images/messenger.png" alt=""/>
                                </a>
                            <a className="element-login"  href="https://google/account.com" target="_blank" rel="noreferrer">
                                    <img src="../images/messenger.png" alt=""/>
                                </a>
                            <a className="element-login"  href="https://google/account.com" target="_blank" rel="noreferrer">
                                    <img src="../images/messenger.png" alt=""/>
                                </a>
                            <a className="element-login"  href="https://google/account.com" target="_blank" rel="noreferrer">
                                    <img src="../images/messenger.png" alt=""/>
                                </a>
                            <a className="element-login"  href="https://google/account.com" target="_blank" rel="noreferrer">
                                    <img src="../images/messenger.png" alt=""/>
                                </a>
                            <a className="element-login"  href="https://google/account.com" target="_blank" rel="noreferrer">
                                    <img src="../images/messenger.png" alt=""/>
                                </a>
                        </div>
                        <div className="login-Buttons">
                            <button className="login-Button"  onClick={handleLogin}>Войти в аккаунт</button>
                            <button className="login-Button"  onClick={() => navigate('/register')}>Зарегистрироваться</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
