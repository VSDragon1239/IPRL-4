// GuestRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';

const GuestRoutes = () => (
    <React.Fragment>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </React.Fragment>
);

export default GuestRoutes;
