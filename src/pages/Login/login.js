import './login.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../services/api';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    const handleSubmit = (e) => {
        dispatch(login({firstName: username, "email": username, "password": password}))
        console.log(username);
        console.log(password);
        console.log(user.value.firstName);
        navigate("/user", { replace: true });
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon className='sign-in-icon' icon={faCircleUser} />
                <h1>Sign In</h1>
                <form onSubmit={(e) => {e.preventDefault();handleSubmit()}}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="email" id="username" onChange={(e) => setUsername(e.target.value)} value={username}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password}/>
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