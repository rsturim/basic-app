import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import ComponentOne from './pages/ComponentOne';
import ComponentTwo from './pages/ComponentTwo';
import Signup from './pages/Signup';
import Planets from './pages/Planets';

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={ComponentOne} />
            <Route path="/one" component={ComponentOne} />
            <Route path="/two" component={ComponentTwo} />
            <Route path="/signup" component={Signup} />
            <Route path="/planets" component={Planets} />
        </div>
    </Router>
);

export default App;
