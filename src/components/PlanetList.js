import React, { Component } from 'react';

import SwapiService from '../common/SwapiService';

export default class PlanetList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            planets: [],
            lifeCycle: '',
        };
    }

    componentDidMount() {
        this.fetchPlanets();

        this.setState({
            lifeCycle: 'componentDidMount',
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.planets &&
            prevState.planets.length !== this.state.planets.length
        ) {
            this.setState({
                lifeCycle: 'componentDidUpdate',
            });
        }
    }

    fetchPlanets() {
        SwapiService.getPlanets().then(response => {
            this.setState({
                isLoading: false,
                planets: response.data.results,
            });
            this.alderaan = response.data.results.find(
                p => p.name == 'Alderaan',
            );
        });
    }

    renderPlanetListItmes(planets) {
        return planets.map(p => (
            <li key={p.name} data-testid={this.kebabCase(p.name)}>
                {p.name}
            </li>
        ));
    }

    hasAlderaan(planets) {
        if (planets && planets.length > 0) {
            return planets.find(p => p.name == 'Alderaan') ? true : false;
        } else {
            return false;
        }
    }

    toggleAlderaan = planets => {
        if (this.hasAlderaan(planets)) {
            planets = planets.filter(p => p.name !== this.alderaan.name);
        } else {
            planets.push(this.alderaan);
        }

        this.setState({ planets });
    };

    kebabCase(string) {
        let result = string;

        // Convert camelCase capitals to kebab-case.
        result = result.replace(/([a-z][A-Z])/g, function(match) {
            return match.substr(0, 1) + '-' + match.substr(1, 1).toLowerCase();
        });

        // Convert non-camelCase capitals to lowercase.
        result = result.toLowerCase();

        // Convert non-alphanumeric characters to hyphens
        result = result.replace(/[^-a-z0-9]+/g, '-');

        // Remove hyphens from both ends
        result = result.replace(/^-+/, '').replace(/-$/, '');

        return result;
    }

    render() {
        const { planets, isLoading, lifeCycle } = this.state;
        let hasAlderaan = this.hasAlderaan(planets);

        return (
            <div className="planet-container">
                <div className="planet-list">
                    {!isLoading && planets ? (
                        <ul>{this.renderPlanetListItmes(planets)}</ul>
                    ) : (
                        <div>loading planets</div>
                    )}
                </div>

                <div className="life-cycles">
                    {!isLoading && planets && (
                        <button
                            type="button"
                            className={`btn btn-${
                                hasAlderaan ? 'danger' : 'success'
                            }`}
                            onClick={e => this.toggleAlderaan(planets)}
                        >
                            {hasAlderaan ? 'remove' : 'add'} Alderaan
                        </button>
                    )}
                    <p className="life-cycle">{lifeCycle}</p>
                </div>
            </div>
        );
    }
}
