import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('Renders app without error', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.length).toBe(1);
});
