import React, { useContext } from 'react';

import { GifContext } from '../../context/GifContext';

import SearchBar from '../searchBar/SearchBar';

import { FixedContainer } from './FixedNavWithSearch.styles';
import {
  StyledLink,
  NavContainer,
  LoginRegister,
  ResponsiveMenu,
} from '../nav/Nav.styles';

const FixedNavWithSearch = () => {
  const { width, scroll, clearInput, openMenu, closeMenu } = useContext(
    GifContext
  );
  return (
    <>
      {scroll > 0 && width <= 1080 ? (
        <FixedContainer>
          <NavContainer>
            <StyledLink to="/" onClick={clearInput}>
              <img src={require('../../assets/neonHeartFull.svg')} alt="" />
              JIFFY
            </StyledLink>
            <ResponsiveMenu onMouseEnter={openMenu} onMouseLeave={closeMenu}>
              <span>&#8942;</span>
            </ResponsiveMenu>
            <LoginRegister to="/profile">
              <div
                style={{
                  width: '20%',
                  backgroundColor: '#515151',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <i className="fas fa-user"></i>
              </div>
              <div
                style={{
                  width: '80%',
                  backgroundColor: '#414141',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <h5>Log in</h5>
              </div>
            </LoginRegister>
          </NavContainer>

          <SearchBar />
        </FixedContainer>
      ) : null}
    </>
  );
};

export default FixedNavWithSearch;
