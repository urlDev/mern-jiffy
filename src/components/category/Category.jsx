import React, { useContext } from 'react';

import { GifContext } from '../../context/GifContext';

import DefaultCategorySearchResult from '../defaultCategorySearchResult/DefaultCategorySearchResult';

const Category = () => {
  const { category } = useContext(GifContext);
  return (
    <>
      <DefaultCategorySearchResult type={category} visible={true} />
    </>
  );
};

export default Category;
