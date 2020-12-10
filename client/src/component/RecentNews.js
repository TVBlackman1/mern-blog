import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import {useTheme} from '../context/ThemeContext'


export const RecentNews = ({news}) => {
    const theme = useTheme()

    const styleNav = classNames({
        "grey darken-2" : theme.darkMode
    })


    console.log(news)
    return (
        // <ul id="nav-mobile" className="left hide-on-med-and-down">
        //     {news.recent.map(function(object, i){
        //         return <li className="collection-item" obj={object} key={i} />;
        //     })}
        // </ul>
        <h1>hello</h1>

    )
}

// export default ProfilePage
// module.exports = ProfilePage