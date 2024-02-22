import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useData } from "../contexts/userData"

export default function UserDetails() {
    const Data = useData();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name');
    const email = queryParams.get('email');

    return (
        <div style={{ width: "100%", height: "89vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "300px", height: "150px", backgroundColor: "green", display: "flex", alignItems: "center", justifyContent: "centre", flexDirection: "column" }}>
                <h4>{name}</h4>
                <h4>{email}</h4>
            </div>
        </div>
    )
}