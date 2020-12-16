import React, { useState } from 'react'
import "../styles/app.css"
import "../styles/auth-form.css"
import "../styles/page-header.css"
import classNames from "classnames";
import { themes, ThemeContext } from "../context/ThemeContext";
import {useAuthRequest} from "../hooks/useAuthRequest";


export const AuthPage = () => {

    const { login, register, loading } = useAuthRequest()
    const [formData, setFormData] = useState({password: "", login: ""})

    function onChangeFormValues(event) {
        const value = event.target.value
        const inputName = event.target.name
        setFormData({...formData, [inputName]:value})
    }

    function submitRegister(event) {
        register(formData)
        event.preventDefault()
    }

    function submitLogin(event) {
        login(formData)
        event.preventDefault()
    }


    const renderComponent = ({ currentTheme, toggleTheme }) => {
        const styleTheme = classNames({
            "light-theme" : currentTheme === themes.light,
            "dark-theme" : currentTheme === themes.dark,
            "rose-theme" : currentTheme === themes.rose,
        })
        return (
            <div className={styleTheme}>
                <div className={"page-header " + styleTheme}>
                    <h1>Main page</h1>
                </div>
                <main>
                    <form onSubmit={submitRegister} className={""}>
                        <input name="login" type="text" onChange={onChangeFormValues}/>
                        <input name="password" type="password" onChange={onChangeFormValues}/>
                        <button name="submitRegister" type="submit" disabled={loading}>Sign up</button>
                    </form>
                    <div>-OR-</div>
                    <form onSubmit={submitLogin} method={"POST"} className={""}>
                        <input name="login" type="text" onChange={onChangeFormValues}/>
                        <input name="password" type="password" onChange={onChangeFormValues}/>
                        <button name="submitLogin" type="submit" disabled={loading}>Sign in</button>
                    </form>
                </main>
            </div>
        )
    }

    return (
        <ThemeContext.Consumer>{theme => renderComponent(theme)}</ThemeContext.Consumer>
    )
}
