import React from 'react';

import { Link } from 'react-router-dom';

import PlanetList from '../components/PlanetList';

import Nav from '../components/Nav';
import Header from '../components/Header';

export default function Planets() {
    return (
        <div className="container">
            <Header>Planet List</Header>
            <Nav item="/planets" />
            <PlanetList />
        </div>
    );
}
