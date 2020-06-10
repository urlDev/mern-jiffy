import React, { useContext } from 'react';

import { GifContext } from '../../context/GifContext';

import DefaultCategorySearchResult from '../defaultCategorySearchResult/DefaultCategorySearchResult';

const SearchResult = () => {
  const { searchCategoryResult } = useContext(GifContext);

  return (
    <>
      <DefaultCategorySearchResult
        type={searchCategoryResult}
        visible={false}
      />
    </>
  );
};

export default SearchResult;
