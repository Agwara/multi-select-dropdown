import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Hompage from "../components/HomePage/HomePage";
import LoginComponent from "../components/LoginComponent/LoginComponent";
import PageNotFound from "../components/PageNotFound/PageNotFound";

import PrivateRoute from "./PrivateRoute"


const AppRouter = () => (
    <Router>
        <Switch>
            <PrivateRoute exact path="/" component={Hompage} />

            <Route exact path="/login" component={LoginComponent} />

            <Route component={PageNotFound} />
            
        </Switch>
    </Router>
)

export default AppRouter;