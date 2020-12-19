import { useAuth } from "../context/AuthContext"
const tokenNameStorage = "token"

export function useUserToken() {

    const auth = useAuth()
    // args: token - String, token of user
    function saveToken(token) {
        localStorage.setItem(tokenNameStorage, JSON.stringify({
            token: token
        }))
        console.log(token)
        auth.setToken(token)
    }

    function getToken() {
        try {
            return JSON.parse(localStorage.getItem(tokenNameStorage)).token
        } catch (e) {
            return null
        }
    }

    function removeToken() {
        localStorage.removeItem(tokenNameStorage)
        console.log(auth)
        auth.setToken(null)
        console.log("remove token")


    }

    return { saveToken, removeToken, getToken }
}