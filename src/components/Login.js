import React, {useContext, useState} from 'react';
import {MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Link, useNavigate} from "react-router-dom";
import Rect_85 from "../images/Rectangle 85-1.png";
import registration from "./Registration";
import {Authlog} from "../http/userAPI";
import {Button, CardBody, Form} from "react-bootstrap";
import {Context} from "../index";

const Login = () => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const signIn = async () => {
        try {
            let response;
            response = await Authlog(login, password)
            user.setUser(login)
            user.setIsAuth(true)
            navigate(MAIN_ROUTE)
        } catch (e) {
            alert(e.response.data)
        }
    }
    return (
        <div className='xSx'>
            <div className="VHOD row d-flex align-items-center justify-content-center">
                <div className="col-md-6">
                    <img id="rect_85-1" src={Rect_85} alt="CAT" width="451px" height="481px" title="CAT" />
                </div>
                <div className="col-md-6">
                    <p className="text mx-auto">
                        <b>
                            Вход
                        </b>
                    </p>
                    <p className="text">
                        Для продолжения Вам необходимо войти или зарегистрироваться
                    </p>
                    <Form className={'row d-grid gap-2'}>
                        <Form.Group className="d-grid gap-2 col-md-9 col-sm-12 mx-auto">
                            <Form.Control
                                className="mt-3"
                                placeholder="Ваш логин"
                                value={login}
                                onChange={e => setLogin(e.target.value)}
                            />
                            <Form.Control
                                placeholder="Ваш пороль"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type={password}
                            />
                        </Form.Group>
                        <CardBody className={'d-grid gap-2'}>
                            <div className="d-flex flex-column">
                                <Button className={'col-md-8 mx-auto'} onClick={signIn}>Войти в аккаунт</Button>
                            </div>
                            <div className={'d-grid column-gap-lg-2 d-flex align-items-center justify-content-center'}>______________________________</div>
                            <div className="d-flex flex-column">
                                <Link to={REGISTRATION_ROUTE}>
                                    <Button className="row d-flex align-items-center justify-content-center col-md-8 mx-auto" type="submit" name="signup">Зарегистрироваться</Button>
                                </Link>
                            </div>
                        </CardBody>
                    </Form>
                </div>
            </div>
        </div>

    );
};

export default Login;