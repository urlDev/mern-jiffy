import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, { mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import category from '../__mocks__/category';

import GifContextProvider, { GifContext } from '../context/GifContext';
import DefaultCategorySearchResult from '../components/defaultCategorySearchResult/DefaultCategorySearchResult';
import {
  CategoryContainer,
  SubCategoryContainer,
} from '../components/category/Category.styles';

Enzyme.configure({ adapter: new EnzymeAdapter() });

let mockProps;
let wrapper;
let mockCategory;

describe('Category should render without error and get correct props', () => {
  beforeEach(() => {
    mockCategory = {
      title: 'actions',
    };
    mockProps = {
      type: mockCategory,
      visible: true,
    };
    wrapper = mount(
      <GifContextProvider>
        <DefaultCategorySearchResult {...mockProps} />
      </GifContextProvider>
    );
  });

  test('Should render without error', () => {
    expect(wrapper.length).toBe(1);
  });

  test('Should get the correct props', () => {
    expect(wrapper.children().props().type).toBe(mockCategory);
    expect(wrapper.children().props().visible).toBe(true);
  });
});

describe('Category should get and map data correctly, match the snapshot', () => {
  beforeEach(() => {
    mockProps = {
      type: category,
      visible: true,
    };
    wrapper = mount(
      <Router>
        <GifContextProvider>
          <DefaultCategorySearchResult {...mockProps} />
        </GifContextProvider>
      </Router>
    );
  });

  test('Should show category title', () => {
    expect(wrapper.find('h1').text()).toContain(category.title);
  });
  test('Should map the category data correctly', () => {
    expect(wrapper.find(CategoryContainer).length).toBe(
      Object.keys(category.data).length
    );
  });
  // test('Should get the gif to show in individual gif page', () => {

  //   const shallowWrapper = shallow(
  //     <SubCategoryContainer to={`${category.data[0].gif.slug}`} />
  //   );
  //   console.log(wrapper.instance());
  // });
  test('Should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
