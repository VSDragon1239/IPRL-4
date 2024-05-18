import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import './css/App.css'; // Подключаем глобальные стили



function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <AuthProvider>
            <BrowserRouter>
                <div className="App">
                    <Header toggleSidebar={toggleSidebar}/>
                    <Sidebar isOpen={isSidebarOpen} />
                    <main>
                        <AppRoutes />
                    </main>
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
