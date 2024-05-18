import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom"; // Исправленная строка
import Rect_85 from "../images/Rectangle 85-1.png";
import "../css/Registration.css"
import {Button, Form} from "react-bootstrap";
import {Reglog} from "../http/userAPI";
import {Context} from "../index";
import {MAIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const Registration = observer (() => {
    const {user} = useContext(Context)
    const navigate = useNavigate() // Исправленная строка
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirm, setPassword_confirm] = useState('')

    const register = async () => {
        try {
            let data;
            data = await Reglog(login, email, password, password_confirm)
            user.setUser(user)
            user.setIsAuth(true)
            navigate(MAIN_ROUTE)
        } catch (e) {
            alert(e.response.data)
        }

    }
    return (
        <div className="container REG">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-6">
                    <img id="rect_85-1" src={Rect_85} alt="CAT" title="CAT" />
                </div>
                <div className="col-6">
                    <div className="row ">
                        <p className="col-12 text three">
                            <b>
                                Регистрация
                            </b>
                        </p>
                        <p className="col-12 text four">
                            Осталось совсем чуть-чуть и скоро вы сможете выбрать тур
                        </p>
                    <Form>
                        <div className="inform form-group">
                            <div className="form-group">
                                <Form.Control
                                    className="mt-3"
                                    aria-placeholder="Придумайте свой логин"
                                    value={login}
                                    onChange={e => setLogin(e.target.value)}
                                /> {/*В инпут вводим и сразу перезаписываем состояние*/}
                            </div>
                            <div className="form-group">
                                <Form.Control
                                    className="mt-3"
                                    aria-placeholder="Введите свою почту"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                /> {/*В инпут вводим и сразу перезаписываем состояние*/}
                            </div>
                            <div className="form-group">
                                <Form.Control
                                    className="mt-3"
                                    aria-placeholder="Введите пароль"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type={password}
                                /> {/*В инпут вводим и сразу перезаписываем состояние*/}
                            </div>
                            <div className="form-group">
                                <Form.Control
                                    className="mt-3"
                                    aria-placeholder="Повторите пароль"
                                    value={password_confirm}
                                    onChange={e => setPassword_confirm(e.target.value)}
                                    type={password}
                                /> {/*В инпут вводим и сразу перезаписываем состояние*/}
                            </div>
                        </div>
                        <div className="zareg zelenie_ikonki">
                            <Button onClick={register} >Зарегистрироваться</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
        </div>
    );
});

export default Registration;