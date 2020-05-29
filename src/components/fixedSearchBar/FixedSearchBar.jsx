import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { GifContext } from '../../context/GifContext';

import { SearchContainer } from '../searchBar/SearchBar.styles';
import { StyledLink } from '../nav/Nav.styles';
import { FixedContainer } from './FixedSearchBar.styles';

const FixedSearchBar = () => {
  const {
    scroll,
    clearInput,
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
      {scroll > 0 && (
        <>
          <FixedContainer>
            <StyledLink to="/" onClick={clearInput} className="come-down">
              <img src={require('../../assets/neonHeartFull.svg')} alt="" />
              JIFFY
            </StyledLink>
            <SearchContainer onSubmit={handleSubmit} className="go-right">
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
          </FixedContainer>
        </>
      )}
    </>
  );
};

export default FixedSearchBar;
