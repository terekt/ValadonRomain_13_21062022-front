import { Link } from "react-router-dom";
import './navbar.css';
import logo from "../../assets/argentBankLogo.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'


const Navbar = () => {

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/home">
                <img className="main-nav-logo-image" src={logo}alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to="/login">
                    <FontAwesomeIcon icon={faCircleUser} /> Sign In
                </Link>
            </div>
        </nav>
    )
}

export default Navbar