import React from 'react';

import ComponentTwo from '../ComponentTwo';
import { MemoryRouter } from 'react-router-dom';

import { mount } from 'enzyme';

describe('ComponentTwo', () => {
    beforeEach(() => {
        const wrapper = mount(
            <MemoryRouter>
                <ComponentTwo />
            </MemoryRouter>,
        );
    });

    test('should find and verify and item in the DOM', () => {
        // const wrapper = mount(
        //     <MemoryRouter>
        //         <ComponentTwo />
        //     </MemoryRouter>,
        // );

        expect(wrapper.find('.display-5').text()).toBe('Component 2');
    });

    test('should be able to click a link', () => {});
});
