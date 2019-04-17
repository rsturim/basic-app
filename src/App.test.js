import React from 'react';
import App from './App';

import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

describe('App', () => {
    test('should find and verify and item in the DOM', () => {
        const wrapper = mount(<App />);

        expect(wrapper.find('ComponentOne').length).toEqual(1);
        expect(wrapper.find('.nav-pills li').length).toEqual(4);
    });

    test('should match the snapshot', () => {
        const wrapper = mount(<App />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
