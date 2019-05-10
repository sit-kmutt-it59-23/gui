import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from 'pages/Index';

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Index} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
