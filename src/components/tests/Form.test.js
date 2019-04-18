import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { testBart as bart, prefillContact } from '../../common/constants';
import api from '../../common/api';
import Form from '../Form';

/* == form selectors */

// buttons
const submitButtonSelector = '[data-testid="submitButton"]';
const clearButtonSelector = '[data-testid="clearButton"]';
const prefillButtonSelector = '[data-testid="prefillButton"]';

// inputs
const nameFieldSelector = '[data-testid="name"]';
const emailFieldSelector = '[data-testid="email"]';
const numberFieldSelector = '[data-testid="number"]';

/* == constants */
const mockedEvent = { preventDefault: () => {} };

const updateInput = (wrapper, instance, newValue) => {
    const input = wrapper.find(instance);
    input.simulate('change', {
        currentTarget: { value: newValue },
    });
    return wrapper.find(instance);
};

describe('A form for signing up users', () => {
    test('should present buttons to interactive the form', () => {
        const wrapper = shallow(<Form />);

        expect(wrapper.find('button').length).toBe(3);

        const submitButton = wrapper.find(submitButtonSelector);
        const clearButton = wrapper.find(clearButtonSelector);
        const prefillButton = wrapper.find(prefillButtonSelector);

        expect(submitButton.text()).toBe('Submit');
        expect(clearButton.text()).toBe('Clear');
        expect(prefillButton.text()).toBe('Pre-fill');
    });

    test('should match the snapshot', () => {
        const shallowTree = shallow(<Form />);

        expect(toJson(shallowTree)).toMatchSnapshot();
    });

    describe('and when interacting with this form', () => {
        const wrapper = shallow(<Form />);
        const nameField = wrapper.find(nameFieldSelector);
        const emailField = wrapper.find(emailFieldSelector);
        const numberField = wrapper.find(nameFieldSelector);

        test('inputs to add you personal information should be available', () => {
            expect(wrapper.find('input').length).toBe(3);

            expect(nameField.value).toBe(undefined);
            expect(emailField.value).toBe(undefined);
            expect(numberField.value).toBe(undefined);
        });

        test('users can fill out form the form', () => {
            const wrapper = shallow(<Form />);
            const nameInput = updateInput(
                wrapper,
                nameFieldSelector,
                bart.name,
            );
            const emailInput = updateInput(
                wrapper,
                emailFieldSelector,
                bart.email,
            );
            const numberInput = updateInput(
                wrapper,
                numberFieldSelector,
                bart.number,
            );

            expect(nameInput.props().value).toBe(bart.name);
            expect(emailInput.props().value).toBe(bart.email);
            expect(numberInput.props().value).toBe(bart.number);
        });

        test('users should be able to use the "pre-fill" button to populate the form', () => {
            const wrapper = shallow(<Form />);

            /* == test pre-fill */
            wrapper.find(prefillButtonSelector).simulate('click', mockedEvent);

            expect(wrapper.find(nameFieldSelector).props().value).toBe(
                prefillContact.name,
            );
            expect(wrapper.find(emailFieldSelector).props().value).toBe(
                prefillContact.email,
            );
            expect(wrapper.find(numberFieldSelector).props().value).toBe(
                prefillContact.number,
            );

            /* == test clear */
            wrapper.find(clearButtonSelector).simulate('click', mockedEvent);

            expect(wrapper.find(nameFieldSelector).props().value).toBe('');
            expect(wrapper.find(emailFieldSelector).props().value).toBe('');
            expect(wrapper.find(numberFieldSelector).props().value).toBe('');
        });

        /* == submits the form, calls api  */
        test('users can submit the form', () => {
            jest.spyOn(api, 'addUser').mockImplementation(() =>
                Promise.resolve({ data: 'New User Added' }),
            );
            const wrapper = shallow(<Form />);

            updateInput(wrapper, nameFieldSelector, bart.name);
            updateInput(wrapper, emailFieldSelector, bart.email);
            updateInput(wrapper, numberFieldSelector, bart.number);

            wrapper
                .find('[data-testid="addUserForm"]')
                .simulate('submit', { preventDefault: () => {} });

            expect(api.addUser).toHaveBeenCalledWith(
                bart.name,
                bart.email,
                bart.number,
            );
        });
    });
});

/*
    mockImplementation
    Accepts a function that should be used as the implementation of the mock.
    The mock itself will still record all calls that go into and instances that
    come from itself – the only difference is that the implementation will also
    be executed when the mock is called.
*/
