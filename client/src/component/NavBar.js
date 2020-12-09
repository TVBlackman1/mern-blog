import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import {useTheme} from '../context/ThemeContext'


export const NavBar = () => {
    const theme = useTheme()

    const styleNav = classNames({
        "grey darken-2" : theme.darkMode
    })

    return (
        <nav className={styleNav}>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><NavLink to={"/main"}>Main</NavLink></li>
                    <li><NavLink to={"/profile"}>Profile</NavLink></li>
                    <li><NavLink to={"/auth"}>Auth</NavLink></li>
                    <li><button className="waves-effect waves-light btn-small" onClick={useTheme().toggleTheme}>Theme</button></li>
                </ul>
            </div>
        </nav>
    )
}

// export default ProfilePage
// module.exports = ProfilePage