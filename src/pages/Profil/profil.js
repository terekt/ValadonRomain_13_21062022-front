import Account from "../../components/account/account";
import React, { useState, useEffect } from "react";
import { editname } from '../../services/api';
import "./profil.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, navigate } from "react-router-dom";
import { account } from "../../data/data";

function Profil() {

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [isActive, setIsActive] = useState(false);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //Send change of name
    const handleSubmit = (e) => {

        var input = {
            firstName: firstname,
            lastName: lastname,
        }

        fetch("http://localhost:3001/api/v1/user/profile",
            {
                headers: { Accept: "application/json", Authorization: 'Bearer ' + user.token, 'Content-Type': 'application/json' },
                method: "PUT",
                body: JSON.stringify(input)
            }).then(data => {
                if (data.ok === true) {
                    dispatch(editname({ firstName: firstname, lastName: lastname }))
                }
            })

        setIsActive(current => !current);
    }

    //Allow to hide or show the editing of the name
    const editState = (e) => {
        setIsActive(current => !current);
    };


    //Redirect to home if not connected
    useEffect(() => {
        if (user.connected === false) {
            console.log("You can't access your profile, please log in to your account")
            navigate("/");
        }
    }, [navigate, user.connected])
    
    if (user.connected === true) {
        return (

            <main className="main bg-dark">
                <div className="header">
                    <div className={isActive ? 'edit-hide' : 'edit-show'}>
                        <h1>Welcome back <br />{user.value.body.firstName} {user.value.body.lastName}!</h1>
                        <button className="edit-button" onClick={(e) => { e.preventDefault(); editState() }}>Edit Name</button>
                    </div>
                    <form id="name-form" className={isActive ? 'edit-show' : 'edit-hide'} >
                        <h1>Welcome back</h1>
                        <div className="name-wrapper">
                            <input type="text" id="firstname" onChange={(e) => setfirstname(e.target.value)} placeholder={user.value.body.firstName} value={firstname} />
                            <input type="text" id="lastname" onChange={(e) => setlastname(e.target.value)} placeholder={user.value.body.lastName} value={lastname} />
                        </div>
                        <div className="button-wrapper">
                            <button type="submit" className="edit-button" onClick={(e) => { e.preventDefault(); handleSubmit() }}>Update</button>
                            <button type="submit" className="edit-button" onClick={(e) => { e.preventDefault(); editState() }}>Cancel</button>
                        </div>
                    </form>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <Account title={account[0].title} amount={account[0].amount} description={account[0].description} />
                <Account title={account[1].title} amount={account[1].amount} description={account[1].description} />
                <Account title={account[2].title} amount={account[2].amount} description={account[2].description} />
            </main>
        )
    }

}

export default Profil;