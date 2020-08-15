import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../pages/Home';
import NewRegulation from '../pages/NewRegulation';

export default function Routes() {
    return (
        <Switch>
            <Route path="/regulation" exact component={Home} />
            <Route path="/regulation/new" exact component={NewRegulation} />
        </Switch>
    )
}