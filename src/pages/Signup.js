import React, { Component } from 'react';

import Nav from '../components/Nav';
import Header from '../components/Header';
import Form from '../components/Form';

class Signup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Header>Sign Up</Header>
                <Nav item="/signup" />

                <p className="lead">
                    Nulla lacus justo semper commodo nullam etiam, porta ipsum
                    nonummy.
                </p>
                <hr className="my-4" />
                <Form />
            </div>
        );
    }
}

Signup.propTypes = {};

export default Signup;
