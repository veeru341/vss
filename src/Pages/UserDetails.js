import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import axios from "axios"
import {useData} from "../contexts/userData"

export default function UserDetails(){

    const [filteredData, setFilteredData] = useState([])
    
    const {data} = useData()
    const {id} = useParams();

    console.log("testing data", data);
    console.log("testing params", id)

    useEffect(()=>{
        const newData = data.find(item=>item.id==id)
        setFilteredData(newData)
    }, [])

    return(
        <div>
            <h5>{filteredData?.name}</h5>
            <h5>{filteredData?.email}</h5>
        </div>
    )
}