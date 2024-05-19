import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import './css/App.css';
import AppRoutes from "./routes/AppRoutes";



function App() {


    return (
        <AuthProvider>
            <BrowserRouter>
                <div className="App">
                    <AppRoutes />
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
