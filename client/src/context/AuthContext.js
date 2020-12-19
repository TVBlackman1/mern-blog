import React, { useState, useContext, useEffect } from "react";
import {useUserToken} from "../hooks/useUserToken";


const AuthContext = React.createContext( {
    token: null,
    setToken: () => {}
})

const useAuth = () => {
    return useContext(AuthContext)
}


function AuthProvider({ children }) {
    const [token, setToken] = useState(null)
    const userToken = useUserToken()

    useEffect(() => {
        const gettingToken = userToken.getToken()
        if(gettingToken !== null) {
            setToken(gettingToken)
        }
    })

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            { children }
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext, useAuth }
