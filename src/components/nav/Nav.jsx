import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GifContext } from '../../context/GifContext';

import {
  StyledLink,
  NavContainer,
  Menu,
  Logo,
  LoginRegister,
} from './Nav.styles';
import MenuDropdown from '../menuDropdown/MenuDropdown';

const Nav = () => {
  const { openMenu, closeMenu } = useContext(GifContext);
  return (
    <>
      <NavContainer>
        <StyledLink to="/">
          <Logo />
          JIFFY
        </StyledLink>
        <ul>
          <li>
            <Link to="/reactions">Reactions</Link>
          </li>
          <li>
            <Link to="/animals">Animals</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
          <li>
            <Link to="/gaming">Gaming</Link>
          </li>
          <li>
            <Link to="/celebrities">Celebrities</Link>
          </li>
          <li>
            <Menu onMouseEnter={openMenu} onMouseLeave={closeMenu}>
              &#8942;
            </Menu>
          </li>
        </ul>
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
      <MenuDropdown />
    </>
  );
};

export default Nav;
