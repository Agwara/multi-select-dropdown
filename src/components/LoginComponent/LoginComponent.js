import React from "react";
import { useState, useEffect } from 'react';

import "./LoginComponent.css";

import {authData} from "../../authData/authData"

const LoginComponent = (props) => {
    const [username, setUsername] = useState("");
    const [userPassword, setUserPassword] = useState("")
    const [showError, setShowError] = useState(false);

    const [userData, setUserData] = useState({})

    /*const setSession = () => {
        sessionStorage.setItem("user", "Alonso");
    }

    console.log(sessionStorage.getItem("user"))*/

    useEffect(() => {
        if (sessionStorage.getItem("user")) {  
            props.history.push("/")
            return userData

        }
    })

    const renderError = () => {
        if (showError) {
            return (
                <div className="form-error-color"><p>Invalid Username and Password</p></div>
            )
        } else {
            return (
                <div>
                    
                </div>
            )
        }
    }

    const onClickShowError = () => {
        if (showError) {
            setShowError(false)
        } else {
            setShowError(true)
        }
    }

    const onUserNameChange = (e) => {
        setShowError(false)
        const name = e.target.value;
        setUsername(name)
    }

    const onUserPassowordChange = (e) => {
        const password = e.target.value;
        setUserPassword(password)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if ((authData.user1.name === username) && (authData.user1.password === userPassword)) {
            setUserData({...authData.user1})
            sessionStorage.setItem("user", JSON.stringify({...authData.user1}));

        } else if ((authData.user2.name === username && authData.user2.password === userPassword)) {
            setUserData({...authData.user2})
            sessionStorage.setItem("user", JSON.stringify({...authData.user2}));

        } else if ((authData.user3.name === username && authData.user3.password === userPassword)) {
            setUserData({...authData.user3})
            sessionStorage.setItem("user", JSON.stringify({...authData.user3}));
            
        } else {
            setShowError(true)
        }
    }

    return (
        <main className="login-component">
            <div className="login-form-container">
                <h1 onClick={onClickShowError} className="form-header">Login</h1>

                <div className="form-error">{renderError()}</div>

                <form onSubmit={handleSubmit} className="form-content">
                    <div className="form-input-container">
                        <input 
                            type="text"
                            placeholder="Username"
                            autoFocus
                            className="form-input"
                            value={username}
                            onChange={onUserNameChange}
                            required
                        />
                    </div>

                    <div className="form-input-container">
                        <input 
                            type="password"
                            placeholder="Password"
                            className="form-input"
                            value={userPassword}
                            onChange={onUserPassowordChange}
                            required
                        />
                    </div>

                    <div className="form-input-container">
                        <button className="form-btn">Login</button>
                    </div>

                </form>
            </div>

        </main>
    )
}

export default LoginComponent;