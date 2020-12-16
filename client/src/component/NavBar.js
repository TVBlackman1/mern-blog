import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import {ThemeContext, themes } from '../context/ThemeContext'
import {useAuthRequest} from "../hooks/useAuthRequest";


export const NavBar = () => {
    const { logout } = useAuthRequest()

    const renderComponent = ({ currentTheme, toggleTheme }) => {
        const styleNav = classNames({
            "blue lighten-5" : currentTheme === themes.light,
            "grey darken-2" : currentTheme === themes.dark,
            "pink accent-1" : currentTheme === themes.rose,
        })


        return (
            <nav className={styleNav}>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><NavLink to={"/main"}>Main</NavLink></li>
                        <li><NavLink to={"/profile"}>Profile</NavLink></li>
                        <li><NavLink to={"/auth"}>Auth</NavLink></li>
                        <li><button className="waves-effect waves-light btn-small" onClick={toggleTheme}>Theme</button></li>
                        <li><button className="waves-effect waves-light btn-small" onClick={logout}>Выйти</button></li>
                    </ul>
                </div>
            </nav>
        )
    }

    return (
        <ThemeContext.Consumer>{theme => renderComponent(theme)}</ThemeContext.Consumer>

    )
}
