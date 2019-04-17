import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NAV_LIST = [
    { title: 'One', path: '/one' },
    { title: 'Two', path: '/two' },
    { title: 'Sign Up', path: '/signup' },
    { title: 'Planets', path: '/planets' },
];

export default class Nav extends Component {
    constructor(props) {
        super(props);

        this.item = props.item;
    }

    renderList() {
        const listItems = NAV_LIST.map(nav => {
            if (this.props.item == nav.path) {
                return (
                    <li key={nav.title} className="nav-item">
                        <a className="nav-link active" href="#">
                            {nav.title}
                        </a>
                    </li>
                );
            } else {
                return (
                    <li key={nav.title} className="nav-item">
                        <Link className="nav-link" to={nav.path}>
                            {nav.title}
                        </Link>
                    </li>
                );
            }
        });

        return <ul className="nav nav-pills mt-4 mb-4">{listItems}</ul>;
    }

    render() {
        return <div>{this.renderList()}</div>;
    }
}
