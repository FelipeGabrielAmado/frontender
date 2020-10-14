import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import Spaced from './pages/Spaced'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/spaced" component={Spaced} />
        </Switch>
    </BrowserRouter>
);

export default Routes;