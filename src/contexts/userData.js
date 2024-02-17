import axios from "axios";
import React, { createContext, useContext as useReactContext, useState, useEffect } from "react";

const DataContext = createContext();

export default function UserData({ children }) {
    const [data, setData] = useState([]);
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            setData(res.data);
            setLoading(false);
        })
        .catch(err => {
            setErr(err.message);
            setLoading(false);
        });
    }, []);

    return (
        <DataContext.Provider value={{ data, err, loading }}>
            {children}
        </DataContext.Provider>
    );
}

export const useData = () => {
    const contextData = useReactContext(DataContext)
    return contextData;
};
