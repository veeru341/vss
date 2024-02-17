import React, { useState } from "react"

export default function HOC({ data, setData }) {
    const [newinput, setNewinput] = useState("")

    const handleChange = (e) => {
        setNewinput(e.target.value)
    }

    const handleClick = () => {
        setData([...data, newinput])
        setNewinput("")
    }

    return (
        <div>
            <input type="text" onChange={handleChange} value={newinput} /><br />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}