import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from 'scripts/GlobalStyles';

import Index from 'pages/Index';
import Project from 'pages/Project';

const App = () => (
    <Fragment>
        <GlobalStyles />
        <Router>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/projects" component={Project} />
            </Switch>
        </Router>
    </Fragment>
);

export default App;
