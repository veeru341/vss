import axios from "axios";
import React, { createContext, useContext as useReactContext, useState, useEffect } from "react";

const DataContext = createContext();

export default function UserData({ children }) {
    const [data, setData] = useState([]);
    const [user, setUser] = useState(false);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
           setData(res.data);
        })
    }, []);

    return (
        <DataContext.Provider value={{ data, user, setUser }}>
            {children}
        </DataContext.Provider>
    );
}

export const useData = () => {
    const contextData = useReactContext(DataContext)
    return contextData;
};
