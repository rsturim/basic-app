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
        expect(wrapper.find('.display-5').text()).toBe('Component 2');
    });

    test('should be able to click a link', () => {
        // let link = wrapper.find('.nav-link').first();
        // let link = wrapper.find('[to="/"]');
        let link = wrapper.find('Link');

        expect(link.text()).toBe('one');
    });

    test('should match the snapshot', () => {
        const shallowTree = shallow(<ComponentTwo />);

        expect(toJson(shallowTree)).toMatchSnapshot();
    });
});
