import { useCallback } from 'react'

import {useServerRequest} from "./useServerRequest";

export function useAuthRequest() {
    const { request, loading } = useServerRequest()
    const auth = useCallback(async (router, _data) => {
        console.log("path:", '/api/auth/'+router)
        try {
            const data = await request('/api/auth/'+router, 'POST', { ..._data})
            console.log(data)
            return data
        } catch (e) {
            return null
        }
    }, [request])

    const login = async (data) => {
        const retData = await auth('login', data);
    }

    const register = async (data) => {
        const retData = await auth('register', data);
    }

    return {login, register, loading}
}


