import { useState, useCallback } from 'react'

// request to server with json body
export const useServerRequest = () => {
    const [loading, setLoading] = useState(false)
    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        if(body) {
            headers['Content-Type'] = 'application/json;charset=utf-8'
            body = JSON.stringify(body)
        }
        const response = await fetch(url, {method: method, body: body, headers: headers})

        const data = response.status === 200 ? await response.json() : null

        setLoading(false)
        if (data) {
            return data
        } else {
            throw new Error("server problem")
        }

    }, [])

    return {request, loading}
}