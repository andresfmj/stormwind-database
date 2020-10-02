import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Search from './Search';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';


describe('Search component', () => { // Probar el componente de Search
    const search = shallow(<Search />)
    const clickedHandler = jest.fn()
    const changedHandler = jest.fn()
    test('search component should be mounted', () => { // probar si se esta montando el componente
        expect(search.length).toEqual(1);
    })
    test('find an item', () => {
        const input = shallow(<Input changed={changedHandler} />)
        input.simulate("change", 'garrosh');
        expect(changedHandler).toBeCalledWith('garrosh')
    })
    test('check if button is clickable', () => {
        const btn = shallow(<Button clicked={clickedHandler}>Buscar</Button>)
        btn.simulate('click')
        expect(clickedHandler).toHaveBeenCalled()
    })
})
