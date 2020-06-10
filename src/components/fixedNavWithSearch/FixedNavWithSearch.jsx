import React, { useContext } from 'react';

import { GifContext } from '../../context/GifContext';
import { UserContext } from '../../context/UserContext';

import SearchBar from '../searchBar/SearchBar';

import { FixedContainer } from './FixedNavWithSearch.styles';
import {
  StyledLink,
  NavContainer,
  LoginRegister,
  ResponsiveMenu,
  Logo,
} from '../nav/Nav.styles';

const FixedNavWithSearch = () => {
  const { width, clearInput, openAndCloseMenu, closeMenu } = useContext(
    GifContext
  );
  const { user, url, openAndCloseUserDropdown, closeUserDropdown } = useContext(
    UserContext
  );
  return (
    <>
      <FixedContainer>
        <NavContainer>
          <StyledLink
            to="/"
            onClick={() => {
              closeMenu();
              closeUserDropdown();
              clearInput();
            }}
          >
            <Logo />
            JIFFY
          </StyledLink>
          <ResponsiveMenu onClick={openAndCloseMenu}>
            <span>&#8942;</span>
          </ResponsiveMenu>
          <LoginRegister
            to={!user.name ? '/profile' : ''}
            onClick={user.name && openAndCloseUserDropdown}
          >
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
                  {user.name ? (
                    <img
                      src={`${url}/profile/${user._id}/avatar`}
                      alt="avatar"
                    />
                  ) : (
                    <i className="fas fa-user"></i>
                  )}
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
                  {user.name ? <h5>{user.name}</h5> : <h5>Log in</h5>}
                </div>
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
                {user.name ? (
                  <img src={`${url}/profile/${user._id}/avatar`} alt="avatar" />
                ) : (
                  <i className="fas fa-user"></i>
                )}
              </div>
            )}
          </LoginRegister>
        </NavContainer>

        <SearchBar />
      </FixedContainer>
    </>
  );
};

export default FixedNavWithSearch;
