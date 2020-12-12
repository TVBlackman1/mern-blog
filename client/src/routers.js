import React from "react";
import { MainPage } from "./pages/MainPage"

import {
    Switch,
    Route,
    Redirect

} from "react-router-dom";


export const Routers = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path={"/main"}>
                    <MainPage />
                </Route>
                <Redirect to={"/main"} />
            </Switch>
        </React.Fragment>
    )
}

// export default Routers
// module.exports = Routers