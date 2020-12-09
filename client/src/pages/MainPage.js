import React from 'react'
import "../styles/app.css"
import classNames from "classnames";
import {useTheme} from "../context/ThemeContext";


export const MainPage = () => {
    const theme = useTheme()

    const styleBackground = classNames({
        "dark" : theme.darkMode
    })

    return (
        <div className={styleBackground}>
            <h1>Main page</h1>
        </div>
    )
}

// export default MainPage
// module.exports = MainPage