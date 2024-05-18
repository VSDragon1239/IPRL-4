import {
    MAIN_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    PROFILE_ROUTE,
    TOURS_ROUTE,
    DOCUMENTS_ROUTE,
    HISTORY_ROUTE, FAVORITES_ROUTE
} from "./utils/consts";
import Main from "./pages/Main_EXP";
import Auth from "./pages/Auth";
import UserPage from "./pages/UserPage";
import Tours from "./pages/Tours";

// Присоединение компонентов/страниц
export const authRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: PROFILE_ROUTE,
        Component: UserPage
    },
    {
        path: FAVORITES_ROUTE,
        Component: UserPage
    },
    {
        path: HISTORY_ROUTE,
        Component: UserPage
    },
    {
        path: DOCUMENTS_ROUTE,
        Component: UserPage
    },
    {
        path: TOURS_ROUTE + '/:id',
        Component: Tours
    },

]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: TOURS_ROUTE + '/:id',
        Component: Tours
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }

]