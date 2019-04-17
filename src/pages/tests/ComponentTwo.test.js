import React from 'react';

import ComponentTwo from '../ComponentTwo';
import { MemoryRouter } from 'react-router-dom';

import { mount, shallow } from 'enzyme';

import toJson from 'enzyme-to-json';

describe('ComponentTwo', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <MemoryRouter>
                <ComponentTwo />
            </MemoryRouter>,
        );
    });

    test('should find and verify and item in the DOM', () => {
        expect(wrapper.find('.display-5').text()).toBe('Component two');
    });

    test('should match the snapshot', () => {
        const shallowTree = shallow(<ComponentTwo />);

        expect(toJson(shallowTree)).toMatchSnapshot();
    });
});
