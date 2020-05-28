import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { GifContext } from '../../context/GifContext';

import { SearchContainer } from './SearchBar.styles';

const SearchBar = () => {
  const {
    openModal,
    searchCategory,
    searchTerm,
    closeModal,
    input,
    setInput,
    getNoResultSearchTerm,
  } = useContext(GifContext);

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchTerm(`${input}`);
    searchCategory(`${input}`);
    closeModal();
    history.push(`/search/${input}`);
  };
  return (
    <>
      <SearchContainer onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for all the GIFs"
          value={input}
          onClick={openModal}
          onChange={(e) => {
            setInput(e.target.value);
            searchTerm(`${input}`);
          }}
          required
        />
        <button onClick={getNoResultSearchTerm}>
          <i className="fas fa-search fa-2x"></i>
        </button>
      </SearchContainer>
    </>
  );
};

export default SearchBar;
