import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import {ThemeContext, themes } from '../context/ThemeContext'
import {useAuthRequest} from "../hooks/useAuthRequest";
import "../styles/nav.css"


export const NavBar = () => {
    const { logout } = useAuthRequest()

    const renderComponent = ({ currentTheme, toggleTheme }) => {
        const styleTheme = classNames({
            [currentTheme]: true
        })
        const styleNav = classNames({
            "blue lighten-5" : currentTheme === themes.light,
            "grey darken-2" : currentTheme === themes.dark,
            "pink accent-1" : currentTheme === themes.rose,
        })


        return (
            // <ul className="nav nav-pills">
            //     <li className="nav-item"><NavLink to={"/main"}>Main</NavLink></li>
            //     <li className="nav-item"><NavLink to={"/profile"}>Profile</NavLink></li>
            //     <li className="nav-item"><NavLink to={"/auth"}>Auth</NavLink></li>
            //     <li className="nav-item"><button className="waves-effect waves-light btn-small" onClick={toggleTheme}>Theme</button></li>
            //     <li className="nav-item"><button className="waves-effect waves-light btn-small" onClick={logout}>Выйти</button></li>
            // </ul>
            <header>
                <nav>
                    <ul className="left">
                        <li><NavLink style={{ textDecoration: 'none' }} to={"/main"}><p>Главная</p></NavLink></li>
                        <li><NavLink style={{ textDecoration: 'none' }} to={"/profile"}><p>Профиль</p></NavLink></li>
                        <li><NavLink style={{ textDecoration: 'none' }} to={"/recommended"}><p>Рекомендации</p></NavLink></li>
                    </ul>
                </nav>
                <div className="right">
                    <ul className="right">
                        <li><button onClick={toggleTheme}>Тема</button></li>
                        <li><NavLink style={{ textDecoration: 'none' }} to={"/auth"}><p>Войти</p></NavLink></li>
                    </ul>
                </div>
            </header>
        )
    }

    return (
        <ThemeContext.Consumer>{theme => renderComponent(theme)}</ThemeContext.Consumer>

    )
}
