import React from 'react';

import App from './App';
import { mount } from 'enzyme';

describe('App', () => {
    test('should find and verify and item in the DOM', () => {
        const wrapper = mount(<App />);
        let headerTest = wrapper.find('.display-5').text();

        expect(headerTest).toEqual('Component 1');

        // console.log(wrapper.debug());

        // expect(wrapper.find('h1').text()).toBe('Simple React Boilerplate');
    });
});
