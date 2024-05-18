import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
            <Router>
                <div className="App">
                    <Header toggleSidebar={toggleSidebar}/>
                    <Sidebar />
                    <main>
                        <AppRoutes />
                    </main>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
