const tokenNameStorage = "token"

export function useUserToken() {

    // args: token - String, token of user
    function saveToken(token) {
        localStorage.setItem(tokenNameStorage, JSON.stringify({
            token: token
        }))
    }

    function getToken() {
        return JSON.parse(localStorage.getItem(tokenNameStorage)).token
    }

    function removeToken() {
        localStorage.removeItem(tokenNameStorage)
    }

    return {saveToken, getToken, removeToken}
}