import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routers } from "./routers"
import {NavBar} from "./component/NavBar";
import {ThemeProvider} from "./context/ThemeContext";
import {AuthProvider} from "./context/AuthContext";
import "./styles/app.css"


export default function App() {

    return (
        <AuthProvider>
            <ThemeProvider>
                <div className="App">
                    <BrowserRouter>
                        <NavBar />
                        <Routers />
                    </BrowserRouter>
                </div>
            </ThemeProvider>
        </AuthProvider>
  );
}