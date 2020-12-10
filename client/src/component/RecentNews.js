import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import {useTheme} from '../context/ThemeContext'


export const RecentNews = ({news}) => {
    const theme = useTheme()

    const styleNav = classNames({
        "grey darken-2" : theme.darkMode
    })


    console.log(Object.keys(news.recent))
    return (
        <ul id="nav-mobile" className="left hide-on-med-and-down">
            {Object.keys(news.recent).map(function(newsTitle, i){
                return <li className="collection-item" key={i}>{newsTitle}</li>;
            })}
        </ul>
        // <h1>hello</h1>

    )
}

// export default ProfilePage
// module.exports = ProfilePage