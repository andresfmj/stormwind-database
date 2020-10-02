import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Results from './Results';

const itemsMock = [
    {
        id: 100,
        quality: '_quality_',
        name: '_name_',
        icon: '_icon_',
        is_equippable: false,
        required_level: 0,
        level: 1
    }
]

describe('Testing Results component', () => { // Probar el componente de Results
    test('should render Results component', () => { // probar si se esta montando el componente de resultados
        const results = shallow(<Results />)
        expect(results.length).toEqual(1);
    })
    test('loading spinner must be present before load data', () => {
        const results = shallow(<Results loading={true} />)
        expect(results.find('.lds-ellipsis').exists()).toBe(true)
    })
    test('validate items if spinner is not shown', () => {
        const results = shallow(<Results items={itemsMock} />)
        expect(results.find('.card-container').exists()).toBe(true)
    })
})
