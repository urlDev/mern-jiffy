import React from 'react';
import { Link } from 'react-router-dom';

import { StyledLink, NavContainer, Logo, Menu, MenuModal } from './Nav.styles';

const Nav = () => {
  return (
    <>
      <NavContainer>
        <StyledLink>
          <img src={require('../../assets/neonHeartFull.svg')} alt="" />
          JIFFY
        </StyledLink>
        <ul>
          <li>
            <Link to="/reactions">Reactions</Link>
          </li>
          <li>
            <Link to="/entertainment">Animals</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
          <li>
            <Link to="/artists">Gaming</Link>
          </li>
          <li>
            <Menu>&#8942;</Menu>
          </li>
        </ul>
      </NavContainer>
    </>
  );
};

export default Nav;
