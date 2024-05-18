// src/pages/Register.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import '../css/Register.css'; // Подключаем стили для Register

function Register() {
    const { setIsAuth } = useAuth();

    const handleRegister = () => {
        // Логика регистрации пользователя
        setIsAuth(true);
    };

    return (
        <div className="register">
            <h1>Зарегистрироваться</h1>
            <button onClick={handleRegister}>Зарегистрироваться</button>
        </div>
    );
}

export default Register;
