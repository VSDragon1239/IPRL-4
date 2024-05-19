import React, {useState} from 'react';
import {Routes, Route, Navigate, useLocation, matchPath} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Profile from '../pages/Profile';
// import ProfileHome from '../pages/Profile/ProfileHome';
// import Gallery from '../pages/Profile/Gallery';
// import Projects from '../pages/Profile/Projects';
// import Portfolio from '../pages/Profile/Portfolio';
// import Templates from '../pages/Profile/Templates';
// import Training from '../pages/Profile/Training';
// import Achievements from '../pages/Profile/Achievements';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Favorites from "../components/Favorites";
import MainPage from "../pages/MainPage";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Messenger from "../pages/Profile/Messenger";


const AppRoutes = () => {
    const { isAuth } = useAuth();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const location = useLocation();
    const isProfilePage = !!matchPath({ path: '/profile/*', end: false }, location.pathname);
    const isLoginPage = !!matchPath(location.pathname, '/login');
    const isRegisterPage = !!matchPath(location.pathname, '/register');

    return (
        //
        <>
            {isAuth ? (
                <>
                    {isProfilePage ? (
                        <>
                            <Header toggleSidebar={toggleSidebar}/>
                            <div className="App-Sidebar-main-flex">
                                <Sidebar isOpen={isSidebarOpen} />
                                <Routes>
                                    <Route path="/" element={<MainPage />} />
                                    <Route path="/profile" element={<Profile isOpenSidebar={isSidebarOpen}/>}/>
                                    <Route path="/profile/messengers" element={<Messenger />}/>
                                    <Route path="/profile/home" element={<Profile isOpenSidebar={isSidebarOpen}/>}/>
                                    <Route path="/profile/portfolio" element={<Profile isOpenSidebar={isSidebarOpen}/>}/>
                                    <Route path="/profile/projects" element={<Profile isOpenSidebar={isSidebarOpen}/>}/>
                                    <Route path="/profile/gallery" element={<Profile isOpenSidebar={isSidebarOpen}/>}/>
                                    <Route path="*" element={<Navigate to="/profile" />} />
                                </Routes>
                            </div>
                        </>

                    ) : (
                        <>
                            <Header toggleSidebar={toggleSidebar}/>
                            <div className="App-Sidebar-main-flex">
                                <Sidebar isOpen={isSidebarOpen} />
                                <Routes>
                                    <Route path="/" element={<MainPage />} />
                                    <Route path="*" element={<Navigate to="/" />} />
                                    <Route path="/profile" element={<Profile isOpenSidebar={isSidebarOpen}/>}/>
                                    <Route path="/favorites" element={<Favorites />}/>
                                    <Route path="/profile/home" element={<Profile isOpenSidebar={isSidebarOpen}/>}/>
                                    <Route path="/profile/portfolio" element={<Profile isOpenSidebar={isSidebarOpen}/>}/>
                                    <Route path="/profile/projects" element={<Profile isOpenSidebar={isSidebarOpen}/>}/>
                                    <Route path="/profile/gallery" element={<Profile isOpenSidebar={isSidebarOpen}/>}/>
                                </Routes>
                            </div>
                        </>
                    )}
                </>
            ) : (
                <>
                    {isLoginPage ? (
                        <>
                            <Routes>
                                <Route path="*" element={<Navigate to="/" />} />
                                <Route path="/" element={<Login />} />
                                <Route path="/favorites" element={<Favorites />} />

                                <Route path="/login" element={<Login location={location}/>}/>
                                <Route path="/Register" element={<Register location={location}/>}/>
                            </Routes>
                        </>
                    ) : (
                        <>
                            {isRegisterPage ? (
                                <>
                                    <Routes>
                                        <Route path="*" element={<Navigate to="/" />} />
                                        <Route path="/" element={<MainPage />} />
                                        <Route path="/favorites" element={<Favorites />} />

                                        <Route path="/login" element={<Login location={location}/>}/>
                                        <Route path="/Register" element={<Register location={location}/>}/>
                                    </Routes>
                                </>
                            ) : (
                                <>
                                    <Header toggleSidebar={toggleSidebar}/>
                                    <div className="App-Sidebar-main-flex">
                                        <Sidebar isOpen={isSidebarOpen} />
                                        <Routes>
                                            <Route path="*" element={<Navigate to="/" />} />
                                            <Route path="/" element={<MainPage />} />
                                            <Route path="/favorites" element={<Favorites />} />

                                            <Route path="/login" element={<Login />}/>
                                            <Route path="/Register" element={<Register />}/>
                                        </Routes>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </>

            )}
        </>
    );
};

export default AppRoutes


