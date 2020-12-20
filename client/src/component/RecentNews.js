import React, { useState }from 'react'
import classNames from 'classnames'
import {ThemeContext, themes} from '../context/ThemeContext'
import '../styles/recent-news.css'


export const RecentNews = ({news}) => {
    const [activeNews, setActiveNews] = useState(0)

    const setActiveOnNews = (i) => {
        setActiveNews(i)
    }

    console.log(Object.keys(news.recent))

    const renderComponent = ({ currentTheme, toggleTheme }) => {
        const styleTheme = classNames({
            [currentTheme]: true
        })

        return (
            <div className={'recent-news ' + styleTheme}>
                <div className={'recent-news-type-header ' + styleTheme}>
                    Последнее
                </div>
                <div className={'recent-news-type-header ' + styleTheme}>
                    Содержимое
                </div>
                <div className={"authors " + styleTheme}>
                    <ul id="nav-mobile" className="authors">
                        {Object.values(news.recent).map(function(newsElements, i){
                            return <li className={
                                classNames( styleTheme, {
                                    "active" : i === activeNews,
                                    "author": true
                                })
                            } key={i} onClick={() => setActiveOnNews(i)}>{newsElements.author}</li>;
                        })}
                    </ul>
                </div>
                <div className={"content " + styleTheme}>
                    {Object.values(news.recent)[activeNews].content}
                </div>
            </div>
        )
    }

    return (
        <ThemeContext.Consumer>{theme => renderComponent(theme)}</ThemeContext.Consumer>
    )
}
