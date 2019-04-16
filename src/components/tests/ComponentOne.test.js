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

        expect(wrapper.find('.display-5').text()).toBe('Component 1');
    });
});
