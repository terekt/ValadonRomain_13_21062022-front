import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/footer/footer';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Profil from './pages/Profil/profil';
import Navbar from './components/navbar/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user" element={<Profil />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);
