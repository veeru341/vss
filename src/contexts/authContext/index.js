import React, { createContext } from "react"
import { auth } from "../../firebase/firebase"

const AuthContext = createContext();

export default function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedin, setUserLoggedin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const unsubscribe = onAuthStateChnaged(auth, initializeUser)
    }, [])

    return(
        <h2>Hi This is veerababu</h2>
    )
}