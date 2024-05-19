// src/pages/Register.js
import React, {useEffect} from 'react';
import { useAuth } from '../context/AuthContext';
import '../css/Register.css';
import {useNavigate} from "react-router-dom"; // Подключаем стили для Register

function Register({location}) {
    const { setIsAuth } = useAuth();

    const navigate = useNavigate()

    const handleRegister = () => {
        // Логика регистрации пользователя

        setIsAuth(true);
    }

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

                    <div className="register-Main-Text">
                        <h1>Регистрация</h1>
                    </div>

                    <div className="login-Inputs-Block">
                        <div className="login-input">
                            <p>Введите логин</p>
                            <input type="username"/>
                        </div>
                        <div className="login-input">
                            <p>Введите почту</p>
                            <input type="email"/>
                        </div>
                        <div className="login-input">
                            <p>Введите пароль</p>
                            <input type="password"/>
                        </div>
                        <div className="login-input">
                            <p>Повторите пароль</p>
                            <input type="check-password"/>
                        </div>
                        <div className="login-Buttons">
                            <button className="login-Button"  onClick={handleRegister}>Зарегистрироваться</button>
                            <button className="login-Button"  onClick={() => navigate('/login')}>Войти в аккаунт</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
