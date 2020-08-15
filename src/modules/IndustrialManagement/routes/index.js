import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../pages/Home';

export default function Routes() {
    return (
        <Switch>
            <Route path="/management" exact component={Home} />
        </Switch>
    )
}