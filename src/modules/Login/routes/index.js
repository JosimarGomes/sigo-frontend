import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from '../pages';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={LoginPage} />
        </Switch>
    )
}