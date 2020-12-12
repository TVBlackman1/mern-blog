import React, { useState }from 'react'
import classNames from 'classnames'
import {ThemeContext, themes} from '../context/ThemeContext'


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
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Details</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>
                        <ul id="nav-mobile" className="left collection grey darken-2">
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
                    <td>
                        {Object.values(news.recent)[activeNews]}
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
