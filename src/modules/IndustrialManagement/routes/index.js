import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from 'modules/IndustrialManagement/pages/Home';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/game/:id" component={Game} />
        </Switch>
    )
}