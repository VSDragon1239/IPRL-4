
import axios from "axios";

// Обычный запрос, не требует авторизации
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL //'Куда отправлять!'
})

// Сюда автоматически подставляется HeaderAuth и добавляться токен
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

// Надо подставлять автоматически к каждому запросу токен
const authInterceptor = config => {
    return config
}

//Вставляем интерцептор - отрабаьывает перед каждым запросом и подставлять в токен хеад авторизейшн (реализация)
$authHost.interceptors.request.use(authInterceptor)

// Обработка ошибок
$authHost.interceptors.response.use(response => {
    console.log(response.status);
    return response;
});

export {
    $host,
    $authHost
}
