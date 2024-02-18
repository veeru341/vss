import React from "react"
import {Outlet, Navigate} from "react-router-dom"
import {useData} from "../contexts/userData"

const PrivateRoutes = () => {

    const {user} = useData();
    
    return(
        user ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes