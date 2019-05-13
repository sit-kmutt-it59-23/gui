import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import Index from 'pages/Index';
import Project from './pages/Project'

const App = () => (
    <Router>
        <Route path="/" exact component={Index} />
        <Route path="/projects" exact component={Project} />
    </Router>
)

export default App;
