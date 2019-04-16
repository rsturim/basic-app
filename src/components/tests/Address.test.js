import React from 'react';
import { mount } from 'enzyme';

import Address from '../Address';
import toJson from 'enzyme-to-json';

describe('An addres component', () => {
    let wrapper = {};
    beforeEach(() => {
        wrapper = mount(
            <Address
                person="Joe Smith"
                street="123 Cupcake lane"
                city="Emerald City"
                state="VT"
                zip="05445"
            />,
        );
    });

    test('should derive props from a mounted component ', () => {
        expect(wrapper.prop('person')).toEqual('Joe Smith');
        expect(wrapper.props().street).toEqual('123 Cupcake lane');
        expect(wrapper.props().city).toEqual('Emerald City');
        expect(wrapper.props().state).toEqual('VT');
        expect(wrapper.props().zip).toEqual('05445');

        // wrapper.unmount();
    });

    test('should also match the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
