import React from 'react';
import './app.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/footer/footer';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Profil from './pages/Profil/profil';
import Navbar from './components/navbar/navbar';

function App() {
    return (
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
    );
}


export default App;