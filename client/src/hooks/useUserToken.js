import { useAuth } from "../context/AuthContext"
const tokenNameStorage = "token"

export function useUserToken() {

    const auth = useAuth()
    // args: token - String, token of user
    function setStorageToken(token) {
        localStorage.setItem(tokenNameStorage, JSON.stringify({
            token: token
        }))
    }

    function getStorageToken() {
        try {
            return JSON.parse(localStorage.getItem(tokenNameStorage)).token
        } catch (e) {
            return null
        }
    }

    function removeStorageToken() {
        localStorage.removeItem(tokenNameStorage)


    }

    return { setStorageToken, removeStorageToken, getStorageToken }
}