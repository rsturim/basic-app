import ComponentOne from '../ComponentOne';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { mount } from 'enzyme';

describe('ComponentOne', () => {
    test('should find and verify and item in the DOM', () => {
        const wrapper = mount(
            <MemoryRouter>
                <ComponentOne />
            </MemoryRouter>,
        );

        // console.log(wrapper.debug());

        expect(wrapper.find('Header').text()).toBe('Component One');
    });
});
