import React, {useContext, useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import HeaderBar from "./components/HeaderBar";
import {observer} from "mobx-react-lite";
import {check} from "./http/userAPI";
import {Context} from "./index";

const App = observer(() => {
    const {user} = useContext(Context)
    useEffect(() => {
        try {
            check(user).then(response => {
                // Обработайте ответ здесь
                if (response.data && localStorage.getItem('id_user')) {
                    user.setIsAuth(true);
                    user.setUser(response.data.login);
                    console.log("Вы вошли в аккаунт, нужно обновить!")
                } else {
                    console.log("Ну акк не верно сохранён, входите")
                    console.log((localStorage.getItem('id_user')))
                }
                console.log('Сработала чек фанкшн')
            })
        } catch (e) {
            if (e.response && e.response.status === 400) {
                console.error('ХАХАХААХААХАХАХА')
                // alert(e.response.data.message) // Закомментировано
            }
        }
    }, [])

    return (
        <BrowserRouter>
            <HeaderBar/>          {/* Вёрстка шляпы */}
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;
