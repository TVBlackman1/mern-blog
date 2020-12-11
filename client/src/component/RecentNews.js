import React, { useState }from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import {useTheme} from '../context/ThemeContext'


export const RecentNews = ({news}) => {
    const theme = useTheme()
    const [activeNews, setActiveNews] = useState(0)

    const styleLi = classNames({
        "grey darken-2" : theme.darkMode
    })

    const setActiveOnNews = (i) => {
        setActiveNews(i)
    }

    console.log(Object.keys(news.recent))
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
