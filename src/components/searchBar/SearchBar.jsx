import React from 'react';

import { SearchContainer } from './SearchBar.styles';

const SearchBar = () => {
  return (
    <>
      <SearchContainer action="">
        <input type="search" placeholder="Search for all the GIFs" />
        <button>
          <i className="fas fa-search fa-2x"></i>
        </button>
      </SearchContainer>
    </>
  );
};

export default SearchBar;
