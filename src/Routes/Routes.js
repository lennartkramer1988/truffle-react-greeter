// @flow
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import components
import GreeterPage from '../app/Greeter/GreeterPage';

export const routes = (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={ GreeterPage } />
            </Switch>
        </div>
    </BrowserRouter>
);

export default function Routes() {
    return routes;
}