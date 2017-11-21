import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage';
console.log(typeof LoadingPage);

test('should render loading page correctly', () => {
    const wrapper = shallow(<LoadingPage />);
    
    expect(wrapper).toMatchSnapshot();
});