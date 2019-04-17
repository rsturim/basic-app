import React, { Component } from 'react';

import SwapiService from '../common/SwapiService';

export default class PlanetList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            planets: [],
        };
    }
    componentDidMount() {
        this.fetchPlanets();
    }

    fetchPlanets() {
        SwapiService.getPlanets().then(response => {
            this.setState({
                isLoading: false,
                planets: response.data.results,
            });
        });
    }

    render() {
        const { planets, isLoading } = this.state;

        const planetList = planets.map(p => <li key={p.name}>{p.name}</li>);

        return !isLoading && <ul>{planetList}</ul>;
    }
}
