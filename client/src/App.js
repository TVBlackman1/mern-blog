import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routers } from "./routers"
import {NavBar} from "./component/NavBar";
import {ThemeProvider} from "./context/ThemeContext";
import {AuthProvider} from "./context/AuthContext";
import {Footer} from "./component/Footer";
import {ThemedBody} from "./component/ThemedBody";


export default function App() {

    return (
        <AuthProvider>
            <ThemeProvider>
                <ThemedBody>
                    <BrowserRouter>
                        <NavBar />
                        <Routers />
                        {/*<Footer />*/}
                    </BrowserRouter>
                </ThemedBody>
            </ThemeProvider>
        </AuthProvider>
  );
}