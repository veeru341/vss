import React from "react";
import { Link } from "react-router-dom"
import { useData } from "../contexts/userData"

export default function Users() {

    const { data } = useData()

    return (
        <div style={{ display: "flex", height: "80vh", justifyContent: "space-around", flexWrap: "wrap" }}>
            {
                data.map((ele) => {
                    const { id, name, email } = ele
                    return (
                        <Link to={`/users/${id}/?name=${name}&email=${email}`}>
                            <div style={{ backgroundColor: "green", width: "250px", height: "100px", cursor: "pointer", padding: "2px", color: "white", border: "2px solid red" }}>
                                <h5>{name}</h5>
                                <h6>{email}</h6>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}