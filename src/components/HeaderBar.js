import React, {useContext, useEffect, useState} from 'react';
import Image17 from '../images/new_ava_saitov.jpg';
import "../css/Header.css"
import {Link, useLocation, useNavigate} from "react-router-dom";
import profile_img from "../images/112 3.png"
import favorites_img from "../images/image 12.png"
import {FAVORITES_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import { Context } from '../index';
import {Button} from "react-bootstrap";


const HeaderBar = () => {
    const { user } = useContext(Context); // Используйте Context для доступа к экземпляру UserTravel
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(location.pathname === LOGIN_ROUTE);
    const [isReg, setIsReg] = useState(location.pathname === REGISTRATION_ROUTE); // Добавлено

    useEffect(() => {
        setIsLogin(location.pathname === LOGIN_ROUTE);
        setIsReg(location.pathname === REGISTRATION_ROUTE); // Добавлено
    }, [location]);

    return (
        <>
            <header className="container header row d-flex align-items-center justify-content-center">
                <div className="flex-row container-fluid justify-content-between">
                    <div className="row ">
                        <div className="col-2 mx-auto">
                            <Link to={MAIN_ROUTE} className="mb-1">
                                <img className="img_17" src={Image17} alt="Epsilon"
                                     width="124px" height="98px" title="Epsilon" />
                            </Link>
                        </div>
                        <div className="col-2 mx-auto">
                            <p className="text one">
                                <b>
                                    <i>
                                        Путешествуй по России
                                    </i>
                                </b>
                            </p>
                        </div>
                        <div className="col-4 mx-auto">
                            <p className="text two">
                                Служба поддержки: 8 (900) 000 - 00 - 00
                            </p>
                        </div>

                        {user.isAuth ? (
                            // Этот блок будет отображаться, если пользователь авторизован
                            <>
                                <div className="col-2 mb-1 mx-auto">
                                    <Link to={FAVORITES_ROUTE}>
                                        <img className="img_17" src={favorites_img} alt="Описание" />
                                    </Link>
                                </div>

                                <div className="col-2 mb-1 mx-auto">
                                    <Link to={PROFILE_ROUTE}>
                                        <img className="img_17" src={profile_img} alt="Описание" />
                                    </Link>
                                </div>
                            </>
                        ) : (
                            isLogin ?
                                // Код для страницы входа
                                <div>

                                </div>
                                :
                                isReg ?
                                    // Код для страницы регистрации
                                    <div>

                                    </div>
                                    :
                                    // Код для всех остальных страниц
                                    <div>
                                        <div className="col-2 mb-1 mx-auto">
                                            <Link to={LOGIN_ROUTE}>
                                                <Button className={'flex-fill'}/>
                                            </Link>
                                        </div>
                                    </div>

                        )}
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderBar;