import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"
import { useData } from "../contexts/userData"
import { useLocation } from "react-router-dom";

export default function UserDetails() {

    const [filteredData, setFilteredData] = useState([])

    const { data } = useData();
    const { id } = useParams();
    const { queryparams } = useLocation();

    console.log("queryparams", queryparams)

    useEffect(() => {
        const newData = data.find(item => item.id == id)
        setFilteredData(newData)
    }, [])

    return (
        <div style={{width:"100vw", height:"90vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div style={{width:"300px", height:"150px", backgroundColor:"green", display:"flex", alignItems:"center", justifyContent:"centre", flexDirection:"column"}}>
                <h4 style={{ color: "white" }}>{filteredData?.name}</h4>
                <h5 style={{ color: "white" }}>{filteredData?.email}</h5>
            </div>
        </div>
    )
}