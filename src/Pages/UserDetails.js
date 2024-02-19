import React from "react";
import { useLocation } from "react-router-dom";

export default function UserDetails() {

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search)

    const name = queryParams.get('name')
    const email = queryParams.get('email')

    return (
        <div style={{width:"100vw", height:"90vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div style={{width:"300px", height:"150px", backgroundColor:"green", display:"flex", alignItems:"center", justifyContent:"centre", flexDirection:"column"}}>
                <h4 style={{ color: "white" }}>{name}</h4>
                <h5 style={{ color: "white" }}>{email}</h5>
            </div>
        </div>
    )
}