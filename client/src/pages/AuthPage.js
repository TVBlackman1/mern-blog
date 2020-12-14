import React, { useState, useCallback } from 'react'
import "../styles/app.css"
import "../styles/auth-form.css"
import "../styles/page-header.css"
import classNames from "classnames";
import { themes, ThemeContext } from "../context/ThemeContext";
import {useServerRequest} from "../hooks/useServerRequest";
import {RecentNews} from "../component/RecentNews";
import MaterialIcon from "material-icons-react";


export const AuthPage = () => {
    // const [loadedNews, setLoadedNews] = useState(null)
    // const { request } = useServerRequest()
    // const getRecentNews = useCallback(async () => {
    //     try {
    //         const data = await request('/api/main', 'POST')
    //         console.log(data)
    //         setLoadedNews(data)
    //     } catch (e) {
    //         setLoadedNews({recent: ""})
    //
    //     }
    // }, [request])

    const { request, loading } = useServerRequest()
    const [formData, setFormData] = useState({password: "", login: ""})

    function onChangeFormValues(event) {
        const value = event.target.value
        const inputName = event.target.name
        setFormData({...formData, [inputName]:value})
        console.log(value)
    }

    function submit(event) {
        console.log(formData)
        event.preventDefault();
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
                    <form onSubmit={submit} method={"POST"}>
                        <input name="login" type="text"M onChange={onChangeFormValues}/>
                        <input name="password" type="password" onChange={onChangeFormValues}/>
                        <button type="submit">Register</button>
                    </form>
                {/*    <button className={"btn-get-recent-news " + styleTheme} onClick={getRecentNews}>*/}
                {/*    <MaterialIcon icon="library_books" size='small'/>*/}
                {/*    Latest news*/}
                {/*</button>*/}
                {/*    <div className={"container"}>*/}
                {/*        {loadedNews && <RecentNews news={loadedNews} />}*/}
                {/*    </div>*/}
                </main>
            </div>
        )
    }

    return (
        <ThemeContext.Consumer>{theme => renderComponent(theme)}</ThemeContext.Consumer>
    )
}
