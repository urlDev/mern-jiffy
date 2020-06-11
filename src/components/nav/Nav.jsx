import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';
import { GifContext } from '../../context/GifContext';

import {
  StyledLink,
  NavContainer,
  Menu,
  Logo,
  LoginRegister,
  ResponsiveMenu,
} from './Nav.styles';

const Nav = () => {
  const {
    width,
    openMenu,
    closeMenu,
    getCategory,
    openAndCloseMenu,
    clearInput,
  } = useContext(GifContext);
  const { user, openUserDropdown, closeUserDropdown, image } = useContext(
    UserContext
  );
  return (
    <>
      <NavContainer>
        <StyledLink to="/" onClick={clearInput}>
          <Logo />
          JIFFY
        </StyledLink>

        <ul>
          <li>
            <Link
              to="/reactions"
              onClick={() => {
                getCategory('reactions');
                clearInput();
              }}
            >
              Reactions
            </Link>
          </li>
          <li>
            <Link
              to="/animals"
              onClick={() => {
                getCategory('animals');
                clearInput();
              }}
            >
              Animals
            </Link>
          </li>
          <li>
            <Link
              to="/sports"
              onClick={() => {
                getCategory('sports');
                clearInput();
              }}
            >
              Sports
            </Link>
          </li>
          <li>
            <Link
              to="/gaming"
              onClick={() => {
                getCategory('gaming');
                clearInput();
              }}
            >
              Gaming
            </Link>
          </li>
          <li>
            <Link
              to="/celebrities"
              onClick={() => {
                getCategory('celebrities');
                clearInput();
              }}
            >
              Celebrities
            </Link>
          </li>
          <li>
            <Menu onMouseEnter={openMenu} onMouseLeave={closeMenu}>
              &#8942;
            </Menu>
          </li>
        </ul>

        <ResponsiveMenu onClick={openAndCloseMenu} className="right">
          <span>&#8942;</span>
        </ResponsiveMenu>
        <LoginRegister
          to={user.name ? '/profile/details' : '/profile'}
          onMouseEnter={user.name && openUserDropdown}
          onMouseLeave={closeUserDropdown}
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
                  <img src={`data:image/webp;base64,${image}`} alt="avatar" />
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
                <img src={`data:image/webp;base64,${image}`} alt="avatar" />
              ) : (
                <i className="fas fa-user"></i>
              )}
            </div>
          )}
        </LoginRegister>
      </NavContainer>
    </>
  );
};

export default Nav;
