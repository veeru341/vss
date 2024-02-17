import React, {useState} from "react";
import {useData} from "../contexts/userData"

export default function Login() {

    const {user, setUser} = useData();

    console.log("checking data", user)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("checking user", user)
        setUser(true)
    }

    return (
        <div>
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2 style={{color:"white"}}>Login</h2>
                    <div className="form-group">
                        <label htmlFor="email" style={{color:"white"}}>Email:</label>
                        <input type="email" id="email" name="email" style={{width:"95%"}} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" style={{color:"white"}}>Password:</label>
                        <input type="password" id="password" name="password" style={{width:"95%"}} />
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}