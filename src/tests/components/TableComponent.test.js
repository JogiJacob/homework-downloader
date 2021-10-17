import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/TableComponent';

test('should test TableComponent', () => {
 const wrapper = shallow(<Header />);
 expect(wrapper).toMatchSnapshot();
});