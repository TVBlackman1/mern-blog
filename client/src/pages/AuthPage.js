import React from 'react'
import {useTheme} from "../context/ThemeContext";
import classNames from "classnames";

export const AuthPage = () => {
    const theme = useTheme()

    const styleBackground = classNames({
        "dark" : theme.darkMode
    })

    return (
        <div className={styleBackground}>
            <h1>Auth page</h1>
        </div>
    )
}

// export default AuthPage
// module.exports = AuthPage