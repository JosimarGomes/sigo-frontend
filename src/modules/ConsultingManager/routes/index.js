import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import { ConsultingProvider } from '../components/ConsultingForm/ConsultingFormContext';
import Home from '../pages/Home';
import NewConsulting from '../pages/NewConsulting';
import DetailConsulting from '../pages/DetailConsulting';
import Company from '../pages/Company';
import DetailCompany from '../pages/DetailCompany';


export default function Routes() {
    return (
        <Switch>
            <ConsultingProvider>
                <Route path="/consulting" exact component={Home} />
                <Route path="/consulting/add/new" exact component={NewConsulting} />
                <Route path="/consulting/:id" exact component={DetailConsulting} />
                <Route path="/companies" exact component={Company} />
                <Route path="/companies/:id" exact component={DetailCompany} />
            </ConsultingProvider>
        </Switch>
    )
}