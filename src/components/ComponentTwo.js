import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class ComponentTwo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    shouldComponentUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm">
                        <div className="jumbotron">
                            <h1 className="display-4">
                                Simple React Boilerplate
                            </h1>
                            <h3 className="display-5">Component 2</h3>
                            <ul className="nav nav-pills mt-4 mb-4">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        one
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">
                                        two
                                    </a>
                                </li>
                            </ul>

                            <p className="lead">
                                Lorem ipsum dolor sit amet, debitis integer
                                integer viverra, dui mauris feugiat cras
                                facilisis.
                            </p>
                            <hr className="my-4" />
                            <p>
                                Vitae sed mi pulvinar, pede nec quisque sed nisl
                                in, sapien nam in tincidunt amet suspendisse
                                vel. Wisi a curabitur. Cum pretium fusce fusce,
                                faucibus etiam ligula, orci pretium ut quam
                                aliquam sociis, arcu luctus. Donec vel lectus
                                quisque vel, libero lorem ac velit quisque
                                bibendum pede, justo imperdiet nullam magna,
                                faucibus euismod dolor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ComponentTwo.propTypes = {};

export default ComponentTwo;
