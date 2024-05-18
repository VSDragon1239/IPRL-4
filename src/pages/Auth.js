import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import Registration from "../components/Registration";
import Login from "../components/Login";
import {observer} from "mobx-react-lite";

const Auth = observer(() => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE // Булевая фигня, которая сравнивает текущий путь с ./login
    console.log(location) // Надо? чтобы посмотреть, можно убрать

    return (
        <div>
            {isLogin ?      //Если это то
                <div className={'active'}>
                    <Login /> {/*Ссылка на компонент для странички логина*/}
                </div>
                :           //Иначе
                <div>
                    <Registration /> {/*Ссылка на компонент для странички регистрации*/}
                </div>
            }
        </div>
    );
});


export default Auth;
