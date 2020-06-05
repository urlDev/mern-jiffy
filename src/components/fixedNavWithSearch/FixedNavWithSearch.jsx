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
  const { width, clearInput, openAndCloseMenu } = useContext(GifContext);

  return (
    <>
      {width <= 1080 ? (
        <FixedContainer>
          <NavContainer>
            <StyledLink to="/" onClick={clearInput}>
              <img src={require('../../assets/neonHeartFull.svg')} alt="" />
              JIFFY
            </StyledLink>
            <ResponsiveMenu onClick={openAndCloseMenu}>
              <span>&#8942;</span>
            </ResponsiveMenu>
            <LoginRegister to="/profile">
              {width > 500 ? (
                <>
                  <div
                    style={{
                      width: '20%',
                      backgroundColor: '#515151',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    className="right"
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
                    className="responsive"
                  >
                    <h5>Log in</h5>
                  </div>{' '}
                </>
              ) : (
                <div
                  style={{
                    width: '100%',
                    backgroundColor: '#515151',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  className="right"
                >
                  <i className="fas fa-user"></i>
                </div>
              )}
            </LoginRegister>
          </NavContainer>

          <SearchBar />
        </FixedContainer>
      ) : null}
    </>
  );
};

export default FixedNavWithSearch;
