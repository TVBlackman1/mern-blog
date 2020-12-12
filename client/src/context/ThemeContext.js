import React, { useState } from "react";

const themes = {
    light: 'light',
    dark: 'dark',
    rose: 'rose'
}


const ThemeContext = React.createContext( {
        currentTheme: themes.light,
        toggleTheme: () => {}
})


function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(themes.light)

    function toggleTheme() {
        console.log("toggled theme from ", theme)
        setTheme(prevTheme => {
            if (prevTheme === themes.light) {
                return themes.dark
            }
            if (prevTheme === themes.dark) {
                return themes.rose
            }
            if (prevTheme === themes.rose) {
                return themes.light
            }
        })
    }

    return (
        <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme: toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext, themes }
