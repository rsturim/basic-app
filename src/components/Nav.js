/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const NAV_LIST = [
    { title: 'One', path: '/' },
    { title: 'Address', path: '/address' },
    { title: 'Sign Up', path: '/signup' },
    { title: 'Planets', path: '/planets' },
];

export default class Nav extends Component {
    renderList() {
        const listItems = NAV_LIST.map(nav => {
            return (
                <li key={nav.title} className="nav-item">
                    <NavLink exact className="nav-link" to={nav.path}>
                        {nav.title}
                    </NavLink>
                </li>
            );
        });

        return <ul className="nav nav-pills mt-4 mb-4">{listItems}</ul>;
    }

    render() {
        return <div>{this.renderList()}</div>;
    }
}
