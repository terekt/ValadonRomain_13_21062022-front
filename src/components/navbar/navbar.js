import { Link } from "react-router-dom";
import './navbar.css';
import logo from "../../assets/argentBankLogo.png"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../services/api';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'




function Navbar() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/home">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {user.connected ? <>
                    <Link className="main-nav-item" to="/user">
                        <FontAwesomeIcon icon={faCircleUser} /> 
                        {user.value.firstName}
                    </Link>
                    <Link to={"/"} className="main-nav-item" onClick={() => dispatch(logout())}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        Sign Out
                    </Link>
                </> :
                    <Link className="main-nav-item" to="/login">
                        <FontAwesomeIcon icon={faCircleUser} /> Sign In
                    </Link>
                }
            </div>
        </nav>
    )
}

export default Navbar