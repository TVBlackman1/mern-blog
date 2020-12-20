import React from "react";

import "../styles/app.css"
import classNames from "classnames";
import {ThemeContext} from "../context/ThemeContext";


export function ThemedBody({ children }) {
    const renderComponent = ({ currentTheme, toggleTheme }) => {
        const styleTheme = classNames({
            [currentTheme]: true
        })

        return (
            <div className={ "App " + styleTheme }>
                { children }
            </div>
        )
    }

    return (
        <ThemeContext.Consumer>{theme => renderComponent(theme)}</ThemeContext.Consumer>
    )

}

