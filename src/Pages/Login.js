import React, {useState} from "react";

export default function Login() {

    const [loginDetails, setLoginDetails] = useState({
        username : "",
        password : ""
    })

    const handleSubmit = () => {
        
    }

    return (
        <div>
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2 style={{color:"white"}}>Login</h2>
                    <div className="form-group">
                        <label htmlFor="email" style={{color:"white"}}>Email:</label>
                        <input type="email" id="email" name="email" style={{width:"95%"}} required onChange={(e)=>setLoginDetails({...loginDetails, username : e.target.value})} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" style={{color:"white"}}>Password:</label>
                        <input type="password" id="password" name="password" style={{width:"95%"}} required  onChange={(e)=>setLoginDetails({...loginDetails, password : e.target.value})} />
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}