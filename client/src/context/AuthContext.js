import React, { useState, useContext } from "react";


const AuthContext = React.createContext( {
    token: null,
    setToken: () => {}
})

const useAuth = () => {
    return useContext(AuthContext)
}


function AuthProvider({ children }) {
    const [token, setToken] = useState(null)

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            { children }
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext, useAuth }
