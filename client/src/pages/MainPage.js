import React, { useState, useCallback } from 'react'
import "../styles/app.css"
import "../styles/main-page.css"
import "../styles/page-header.css"
import classNames from "classnames";
import { themes, ThemeContext } from "../context/ThemeContext";
import {useServerRequest} from "../hooks/useServerRequest";
import {RecentNews} from "../component/RecentNews";
import { ReactComponent as LogoNews } from '../icons/card-text.svg';
import MaterialIcon from "material-icons-react";


export const MainPage = () => {
    const [loadedNews, setLoadedNews] = useState(null)
    const { request } = useServerRequest()
    const getRecentNews = useCallback(async () => {
        try {
            const data = await request('/api/main', 'POST')
            console.log(data)
            setLoadedNews(data)
        } catch (e) {
            setLoadedNews({recent: ""})

        }
    }, [request])


    const renderComponent = ({ currentTheme, toggleTheme }) => {
        const styleTheme = classNames({
            [currentTheme]: true
        })
        const animatedStripe = classNames({
            "animated-stripe": true,
            "point": !loadedNews,
            "stripe": loadedNews
        })
        console.log(animatedStripe)
        return (
            <div className={styleTheme}>
                <div className={"page-header " + styleTheme}>
                    <h1>Тебя окружают миллионы</h1>
                    <h4>Узнай об их жизни больше</h4>
                </div>
                <main>
                    <button className={"btn-get-recent-news " + styleTheme} onClick={getRecentNews}>
                        {/*<MaterialIcon icon="library_books" size='small'/>*/}
                        {/*<img src='../icons/card-text.svg' width="90" height="90" alt="no image"/>*/}
                        <LogoNews width="22" height="22" />
                        Рекомендуемое
                    </button>
                    <div className={"container"}>
                        {/*{loadedNews}*/}
                        <div className={animatedStripe}/>
                        {loadedNews && <RecentNews news={loadedNews} />}
                    </div>
                </main>
            </div>
        )
    }

    return (
        <ThemeContext.Consumer>{theme => renderComponent(theme)}</ThemeContext.Consumer>
    )
}
