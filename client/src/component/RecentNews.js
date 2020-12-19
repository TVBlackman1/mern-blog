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
        const styleLi = classNames({
            "blue lighten-5" : currentTheme.mode === themes.light,
            "grey darken-2" : currentTheme.mode === themes.dark,
            "pink accent-1" : currentTheme.mode === themes.rose,
        })
        return (
            <table className={'recent-news'}>
                <colgroup>
                    <col className={"column-group-title"} />
                    <col className={"column-group-description"} />
                </colgroup>
                <thead>
                <tr>
                    <th>Последнее</th>
                    <th>Подробнее</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td className={"titles"}>
                        <ul id="nav-mobile" className="list-news">
                            {Object.keys(news.recent).map(function(newsTitle, i){
                                return <li className={
                                    classNames( styleLi, {
                                        "active" : i === activeNews,
                                        "collection-item": true
                                    })
                                } key={i} onClick={() => setActiveOnNews(i)}>{newsTitle}</li>;
                            })}
                        </ul>
                    </td>
                    <td className={"descriptions"}>
                        <div className={"descriptions"}>
                            {Object.values(news.recent)[activeNews]}
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }

    return (
        <ThemeContext.Consumer>{theme => renderComponent(theme)}</ThemeContext.Consumer>
    )
}
