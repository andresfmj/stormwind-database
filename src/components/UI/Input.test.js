import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';


describe('Testing Input component', () => { // Probar el componente de Input
    const input = shallow(<Input />)
    test('input component should be mounted', () => { // probar si se esta montando el componente de la ui
        expect(input.length).toEqual(1);
    })
    test('input classname is required', () => {
        expect(input.hasClass('input')).toEqual(true)
    })
})
