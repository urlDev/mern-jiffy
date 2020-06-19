import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import GifContextProvider, { GifContext } from '../context/GifContext';

import Category from '../components/category/Category';
import DefaultCategorySearchResult from '../components/defaultCategorySearchResult/DefaultCategorySearchResult';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Category component', () => {
  test('Should render component without error', () => {
    const wrapper = mount(
      <GifContextProvider>
        <Category />
      </GifContextProvider>
    );
    expect(wrapper.length).toBe(1);
  });

  test('Should pass the correct props', () => {
    const mockProps = {
      type: 'category',
      visible: true,
    };
    const wrapper = mount(
      <GifContextProvider>
        <DefaultCategorySearchResult {...mockProps} />
      </GifContextProvider>
    );
    expect(wrapper.children().props().type).toBe('category');
    expect(wrapper.children().props().visible).toBe(true);
  });
});
