import React, { Component } from 'react';

import Nav from '../components/Nav';
import Header from '../components/Header';

class ComponentOne extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Header>Component One</Header>
                <Nav item="/one" />
                <p className="lead">
                    Nulla lacus justo semper commodo nullam etiam, porta ipsum
                    nonummy.
                </p>
                <hr className="my-4" />
                <p>
                    Pretium fusce fusce, faucibus etiam ligula, orci pretium ut
                    quam aliquam sociis, arcu luctus. Donec vel lectus quisque
                    vel, libero lorem ac velit quisque bibendum pede, justo
                    imperdiet nullam magna, faucibus euismod dolor. Suscipit
                    dolor id cras maecenas. Nulla lacus justo semper commodo
                    nullam etiam, porta ipsum nonummy ut nunc interdum,
                    tincidunt mi urna cras, et et at aenean mollis morbi odio,
                    ornare eu sagittis.
                </p>
            </div>
        );
    }
}

ComponentOne.propTypes = {};

export default ComponentOne;
