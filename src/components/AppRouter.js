import React, {useContext, useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../router";
import {MAIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {check} from "../http/userAPI";
import {observer} from "mobx-react-lite";


// readme 001
const AppRouter = observer( () => {
    const {user} = useContext(Context) // Берёт переменную из переменной контекста


    return (
        <Routes>
            {user.isAuth ? authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} />
            ) : publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} />
            )}
            <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
        </Routes>
    );
});

export default AppRouter;
