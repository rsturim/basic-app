import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { mount, shallow } from 'enzyme';

import toJson from 'enzyme-to-json';

import Planets from '../Planets';

describe('The Planets page', () => {
    test('should do shallow rendering', () => {
        // const wrapper = mount(<Planets />);

        const wrapper = shallow(<Planets />);
        expect(wrapper.find('Header').length).toBe(1);

        // console.log(wrapper.debug());
    });

    test('should do a Full DOM Render', () => {
        const wrapper = mount(
            <MemoryRouter>
                <Planets />
            </MemoryRouter>,
        );

        expect(wrapper.find('Header').length).toBe(1);
        expect(wrapper.find('Header').text()).toBe('Planet List');

        // console.log(wrapper.debug());
    });

    test('render a dom snapshot for testing', () => {
        const wrapper = shallow(<Planets />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

/**
<MemoryRouter>
A <Router> that keeps the history of your "URL" in memory (does not read or write to the address bar).
Useful in tests and non-browser environments like React Native.

https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/MemoryRouter.md
*/
