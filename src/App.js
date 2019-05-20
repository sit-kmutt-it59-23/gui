import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from 'scripts/GlobalStyles';

import Index from 'pages/Index';
import Project from 'pages/Project';
import FormPage from 'pages/FormPage';
import SelectProject from 'pages/SelectProject';
import HttpNotFound from 'pages/error/HttpNotFound';

const App = () => (
    <Fragment>
        <GlobalStyles />
        <Router>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/projects" component={Project} />
                <Route exact path="/selectProject" component={SelectProject} />
                <Route exact path="/projects/:project_id/docs/:doctype_id/create" component={FormPage} />
                <Route component={HttpNotFound} />
            </Switch>
        </Router>
    </Fragment>
);

export default App;
