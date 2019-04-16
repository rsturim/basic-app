import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Form from '../components/Form';

class Signup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h1>Sign up</h1>
                <ul className="nav nav-pills mt-4 mb-4">
                    <li className="nav-item">
                        <Link className="nav-link" to="/one">
                            one
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/two">
                            two
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">
                            sign up
                        </a>
                    </li>
                </ul>
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
