import React from 'react';

import Address from '../Address';
import { MemoryRouter } from 'react-router-dom';

import { mount, shallow } from 'enzyme';

import toJson from 'enzyme-to-json';

describe('The address page', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <MemoryRouter>
                <Address />
            </MemoryRouter>,
        );
    });

    test('should find and verify and item in the DOM', () => {
        expect(wrapper.find('.display-5').text()).toBe('Address');
    });

    test('should match the snapshot', () => {
        const shallowTree = shallow(<Address />);

        expect(toJson(shallowTree)).toMatchSnapshot();
    });
});
