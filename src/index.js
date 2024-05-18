import React, {createContext} from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import UserTravel from "./travel/UserTravel";
import ToursTravel from "./travel/ToursTravel";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/styles.css';
import FooterBar from "./components/FooterBar";

// readme 002
export const Context = createContext(null) // Передаёт переменную из контекста

const root = document.getElementById('root');
createRoot(root).render(
    <Context.Provider value={{
        user: new UserTravel(), // Проверяет, авторизован пользователь, иль нет (Подсоединяет AppRouter через UserTravel) или просто получает переменную из UserTravel()
        tour: new ToursTravel() // Берёт переменные из "сервера" и бросает в контекст
    }}>
        <App />                 {/* Вёрстка всего*/}
        <FooterBar />           {/* Вёрстка обуви */}
    </Context.Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

