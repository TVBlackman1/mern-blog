import { useCallback } from 'react'
import { useServerRequest } from "./useServerRequest";
import { useUserToken } from "./useUserToken";


export function useAuthRequest() {
    const { request, loading } = useServerRequest()
    const { saveToken, removeToken } = useUserToken()
    const auth = useCallback(async (router, _data) => {
        try {
            const data = await request('/api/auth/'+router, 'POST', { ..._data })
            return data
        } catch (e) {
            return null
        }
    }, [request])

    const login = async (data) => {
        const retData = await auth('login', data);
        if( retData.status === 200) {
            console.log("Success login")
            saveToken(retData.token)
        } else {
            console.log("Failed log")
        }
    }

    const register = async (data) => {
        const retData = await auth('register', data);
    }

    const logout = () => {
        console.log("remove token")
        removeToken()
    }
    return {login, register, logout, loading}
}


