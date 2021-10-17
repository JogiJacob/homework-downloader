import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/TopBar';

test('should test Top Bar', () => {
 const wrapper = shallow(<Header />);
 expect(wrapper).toMatchSnapshot();
});