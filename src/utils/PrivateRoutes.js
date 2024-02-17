import React from "react"
import {Outlet, Navigate} from "react-router-dom"
import {useData} from "../contexts/userData"

const PrivateRoutes = () => {

    const {user} = useData();

    const auth = user
    
    return(
        auth.token ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes