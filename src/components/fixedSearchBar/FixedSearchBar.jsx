import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { GifContext } from '../../context/GifContext';

import { SearchContainer } from '../searchBar/SearchBar.styles';
import { StyledLink } from '../nav/Nav.styles';
import { FixedContainer } from './FixedSearchBar.styles';

import NeonHearts from '../../assets/neonHeartFull.svg';

const FixedSearchBar = () => {
  const {
    scroll,
    width,
    clearInput,
    openModal,
    searchCategory,
    searchTerm,
    closeModal,
    input,
    setInput,
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
      {width > 1080 && scroll > 0 && (
        <>
          <FixedContainer>
            <StyledLink to="/" onClick={clearInput} className="come-down">
              <img src={NeonHearts} alt="Neon 8-bit heart logo" />
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
              <button aria-label="search">
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
