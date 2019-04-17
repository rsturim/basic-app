/* eslint-disable compat/compat */

import axios from 'axios';

const baseUrl = 'https://swapi.co/api';

class SwapiService {
    getPlanets() {
        return axios.get(`${baseUrl}/planets/`);
    }
}
export default new SwapiService();
