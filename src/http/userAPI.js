import  {$authHost, $host} from "./index";
import {useContext} from "react";
import {Context} from "../index";

export const Reglog = async (login, email, password, password_confirm) => {
    const {response} = await $host.post('api/auth/reg', {login, email, password, password_confirm})
    localStorage.setItem('login', login);
    localStorage.setItem('password', password);
    return response
}

export const Authlog = async (login, password) => {
    const response = await $host.post('api/auth', {login, password})
    localStorage.setItem('id_user', response.data);
    localStorage.setItem('login', login);
    localStorage.setItem('password', password);
    return response
}


export const check = async (user) => {
    const log1 = localStorage.getItem('login');
    const pas1 = localStorage.getItem('password');
    const response = await $host.post('api/auth', {login: log1, password: pas1});

    return response
}