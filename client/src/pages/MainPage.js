import React, { useState, useCallback } from 'react'
import "../styles/app.css"
import classNames from "classnames";
import {useTheme} from "../context/ThemeContext";
import {useServerRequest} from "../hooks/useServerRequest";
import {RecentNews} from "../component/RecentNews";
import MaterialIcon, { colorPalette } from "material-icons-react";
import newsIcon from '../icons/news-icon.png'


export const MainPage = () => {
    const [loadedNews, setLoadedNews] = useState(null)
    const { request } = useServerRequest()
    const getRecentNews = useCallback(async () => {
        const data = await request('/api/main', 'POST')
        console.log(data)
        setLoadedNews(data)
    }, [loadedNews])



    const theme = useTheme()

    const styleBackground = classNames({
        "dark" : theme.darkMode
    })

    return (
        <div className={styleBackground}>
            <h1>Main page</h1>
            <button className="waves-effect waves-light btn" onClick={getRecentNews}>
                <MaterialIcon icon="library_books" size='small'/>
                Latest news
            </button>
            <div className={"container"}>
                {loadedNews && <RecentNews news={loadedNews} />}
            </div>
        </div>
    )
}

// export default MainPage
// module.exports = MainPage