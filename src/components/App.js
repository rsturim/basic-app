import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={ComponentOne} />
            <Route path="/two" component={ComponentTwo} />
        </div>
    </Router>
);

export default App;
