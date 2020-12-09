import React, { useContext, useState } from "react";

const ThemeContext = React.createContext( {
        darkMode: false,
        toggleTheme: () => {}
})

function useTheme() {
    return useContext(ThemeContext)
}

function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false)

    function toggleTheme() {
        setDarkTheme(prevTheme => !prevTheme)
        console.log(`Toggled theme: ${darkTheme}`)
    }

    return (
        <ThemeContext.Provider value={{ darkMode: darkTheme, toggleTheme: toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, useTheme}