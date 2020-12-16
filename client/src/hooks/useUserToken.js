import { useState } from 'react'
const tokenNameStorage = "token"

export function useUserToken() {
    const [token, setToken] = useState(null)
    // args: token - String, token of user
    function saveToken(token) {
        localStorage.setItem(tokenNameStorage, JSON.stringify({
            token: token
        }))
        console.log(token)
        setToken(token)
    }

    // function getToken() {
    //     try {
    //         return JSON.parse(localStorage.getItem(tokenNameStorage)).token
    //     } catch (e) {
    //         return null
    //     }
    // }

    function removeToken() {
        localStorage.removeItem(tokenNameStorage)
        setToken(null)
        console.log("remove token")


    }

    return {saveToken, token, removeToken}
}