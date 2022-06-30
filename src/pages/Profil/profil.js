import Account from "../../components/account/account";
import React, { useState } from "react";
import { login } from '../../services/api';
import "./profil.css"
import { useDispatch, useSelector } from "react-redux";

function Profil() {

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [isActive, setIsActive] = useState(false);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        dispatch(login({ firstName: firstname, lastName: lastname }))
        setIsActive(current => !current);
    }

    const editState = (e) => {
        setIsActive(current => !current);
    };

    return (
        <main className="main bg-dark">
            <div className="header">
                <div className={isActive ? 'edit-hide' : 'edit-show'}>
                    <h1>Welcome back <br />{user.value.firstName} {user.value.lastName}!</h1>
                    <button className="edit-button" onClick={(e) => { e.preventDefault(); editState() }}>Edit Name</button>
                </div>
                <form id="name-form" className={isActive ? 'edit-show' : 'edit-hide'} >
                    <h1>Welcome back</h1>
                    <div className="name-wrapper">
                        <input type="text" id="firstname" onChange={(e) => setfirstname(e.target.value)} placeholder={user.value.firstName} value={firstname} />
                        <input type="text" id="lastname" onChange={(e) => setlastname(e.target.value)} placeholder={user.value.lastName} value={lastname} />
                    </div>
                    <div className="button-wrapper">
                        <button type="submit" className="edit-button" onClick={(e) => { e.preventDefault(); handleSubmit() }}>Update</button>
                        <button type="submit" className="edit-button" onClick={(e) => { e.preventDefault(); editState() }}>Cancel</button>
                    </div>
                </form>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
        </main>
    )
}

export default Profil;