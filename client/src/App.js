import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routers } from "./routers"
import {NavBar} from "./component/NavBar";
import {ThemeProvider} from "./context/ThemeContext";
import "./styles/app.css"


export default function App() {

    return (
        <ThemeProvider>
            <div className="App">
                <BrowserRouter>
                    <NavBar />
                    <Routers />
                </BrowserRouter>
            </div>
        </ThemeProvider>
  );
}