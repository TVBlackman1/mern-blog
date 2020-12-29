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
    const [tokenContext, setContextToken] = useState(null)
    const { setStorageToken, removeStorageToken, getStorageToken } = useUserToken()

    useEffect(() => {
        setContextToken(getStorageToken())
    }, [tokenContext])

    function setToken(token) {
        setContextToken(token)
        token ? setStorageToken(token) : removeStorageToken()
    }

    return (
        <AuthContext.Provider value={{ token: tokenContext, setToken }}>
            { children }
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext, useAuth }
