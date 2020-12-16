import { useCallback } from 'react'

import {useServerRequest} from "./useServerRequest";
import {useUserToken} from "./useUserToken";

const storageName = "userData"

export function useAuthRequest() {
    const { request, loading } = useServerRequest()
    const {saveToken, getToken, removeToken} = useUserToken()
    const auth = useCallback(async (router, _data) => {
        try {
            const data = await request('/api/auth/'+router, 'POST', { ..._data})
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

    return {login, register, loading}
}


