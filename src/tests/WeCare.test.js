import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import WeCare from '../components/weCare/WeCare';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('Should render WeCare component', () => {
  const wrapper = mount(<WeCare />);
  expect(wrapper.debug()).toMatchSnapshot();
});
