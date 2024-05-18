// src/pages/Login.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import '../css/Login.css'; // Подключаем стили для Login

function Login() {
    const { setIsAuth } = useAuth();

    const handleLogin = () => {
        // Логика входа пользователя
        setIsAuth(true);
    };

    return (
        <div className="login">
            <h1>Войти</h1>
            <button onClick={handleLogin}>Войти</button>
        </div>
    );
}

export default Login;
