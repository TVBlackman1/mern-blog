import React from 'react'
import {useTheme} from "../context/ThemeContext";
import classNames from "classnames";

export const ProfilePage = () => {
    const theme = useTheme()

    const styleBackground = classNames({
        "dark" : theme.darkMode
    })

    return (
        <div className={styleBackground}>
            <h1>Profile page</h1>
        </div>
    )
}

// export default ProfilePage
// module.exports = ProfilePage