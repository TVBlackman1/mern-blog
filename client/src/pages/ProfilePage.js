import React, { useState, useCallback } from 'react'
import { useTheme } from "../context/ThemeContext";
import classNames from "classnames";
import { useServerRequest } from '../hooks/useServerRequest'
import {RecentNews} from "../component/RecentNews";

export const ProfilePage = () => {
    const [loadedNews, setLoadedNews] = useState(null)
    const { request } = useServerRequest()
    const getRecentNews = useCallback(async () => {
        const data = await request('/api/main', 'POST')
        console.log(data)
        setLoadedNews(data)
        console.log(loadedNews)
    }, [loadedNews])



    const theme = useTheme()

    const styleBackground = classNames({
        "dark" : theme.darkMode
    })

    return (
        <div className={styleBackground}>
            <h1>Profile page</h1>
            <button onClick={getRecentNews}>get recent news</button>
            {loadedNews && <RecentNews>loadedNews</RecentNews>}
            {/*{loadedNews && <h1>hello</h1>}*/}
            <h2>ohoho</h2>
        </div>
    )
}

// export default ProfilePage
// module.exports = ProfilePageяё