import App from '../App';
import React from 'react';
import { mount } from 'enzyme';

describe('App', () => {
    test('should find and verify and item in the DOM', () => {
        const wrapper = mount(<App />);

        expect(wrapper.find('h1').text()).toBe('Simple React Boilerplate');
    });
});
