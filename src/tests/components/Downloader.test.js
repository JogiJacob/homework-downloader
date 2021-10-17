import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Downloader';

test('should test Downloader component', () => {
 const wrapper = shallow(<Header />);
 expect(wrapper).toMatchSnapshot();
});