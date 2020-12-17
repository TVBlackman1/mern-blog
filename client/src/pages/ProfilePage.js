import React, { useState, useCallback } from 'react'
import "../styles/app.css"
import "../styles/main-page.css"
import "../styles/page-header.css"
import classNames from "classnames";
import { themes, ThemeContext } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext"


export const ProfilePage = () => {
    const auth = useAuth()
    // const [loadedNews, setLoadedNews] = useState(null)
    // const { request } = useServerRequest()
    // const getRecentNews = useCallback(async () => {
    //     try {
    //         const data = await request('/api/main', 'POST')
    //         console.log(data)
    //         setLoadedNews(data)
    //     } catch (e) {
    //         setLoadedNews({recent: ""})
    //
    //     }
    // }, [request])


    const renderComponent = ({ currentTheme, toggleTheme }) => {
        const styleTheme = classNames({
            [currentTheme]: true
        })
        console.log("Token:", auth.token)

        if (!auth.token) {
            return <h1>Войдите под своим логином для просмотра страницы</h1>
        }

        return (
            <div className={styleTheme}>
                <h1>Ваша страница открыта</h1>
            </div>
        )
    }

    return (
        <ThemeContext.Consumer>{theme => renderComponent(theme)}</ThemeContext.Consumer>
    )
}
