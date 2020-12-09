import React from "react";
import { MainPage } from "./pages/MainPage"
import { AuthPage } from "./pages/AuthPage"
import { ProfilePage } from "./pages/ProfilePage"

import {
    Switch,
    Route,
} from "react-router-dom";


export const Routers = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path={"/main"}>
                    <MainPage />
                </Route>
                <Route path={"/auth"}>
                    <AuthPage />
                </Route>
                <Route path={"/profile"}>
                    <ProfilePage />
                </Route>
            </Switch>
        </React.Fragment>
    )
}

// export default Routers
// module.exports = Routers