import './login.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { LoginFetch } from '../../services/actions';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit() {
        const input = JSON.stringify({ "email": username, "password": password })
        //dispatch(login({firstName: "Tony", lastName: "Stark", "email": username, "password": password})) // To test without backend
        
        LoginFetch(input, navigate, setError, dispatch)
        
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon className='sign-in-icon' icon={faCircleUser} />
                <h1>Sign In</h1>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="email" id="username" onChange={(e) => setUsername(e.target.value)} value={username} />
                        <p className={`error ${error ? 'errorShow' : 'errorHide'}`} >Invalid username or password</p>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
}

export default Login;