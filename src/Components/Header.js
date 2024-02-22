import React from "react";
import { Link } from "react-router-dom"
import {useData} from "../contexts/userData"
import logo from "../Images/logo3.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header(){

    const {user, setUser} = useData();

    console.log("checking user", user)

    const handleLogout = () => {
        setUser(false)
    }

    return(
        <div style={{width:"100%", backgroundColor:"black", color:"white", display:"flex", height:"60px", opacity:"0.7"}}>
            <div style={{width:"40%", display:"flex", justifyContent:"left", alignItems:"center"}}>
                <img src={logo} alt="logo" width="70px" height="60px" style={{marginLeft:"20px", borderRadius:"12px 0px 12px 0px"}} />
            </div>
            <nav className="navbar">
            <ul style={{     display:"flex", alignItems:"center", justifyContent:"space-around", listStyleType:"none"}}>
                <Link to="/" style={{color:"white", textDecoration:"none"}}><li>Home</li></Link>
                <Link to="/about" style={{color:"white", textDecoration:"none"}}><li>About</li></Link>
                <Link to="/products" style={{color:"white", textDecoration:"none"}}><li>Products</li></Link>
                <Link to="/users" style={{color:"white", textDecoration:"none"}}><li>Users</li></Link>
                {
                    user ? <Link to="/" style={{color:"white", textDecoration:"none"}} onClick={handleLogout}><li>Logout</li></Link> : <Link to="/login" style={{color:"white", textDecoration:"none"}}><li>Login</li></Link>
                }
                <Link to="/cart" style={{color:"white", textDecoration:"none"}}><li><ShoppingCartIcon /></li></Link>
            </ul>
            </nav>
        </div>
    )
}