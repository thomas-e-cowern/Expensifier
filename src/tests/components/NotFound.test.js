import React from 'react';
import {
    shallow
} from 'enzyme';
import notFoundPage from '../../components/NotFound';

test('Should render NotFound page correctly', () => {
    
    const wrapper = shallow(<notFoundPage />);
    expect(wrapper).toMatchSnapshot();
});