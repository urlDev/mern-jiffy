import React, { useContext } from 'react';

import { GifContext } from '../../context/GifContext';

import { MenuDropdownContainer, Black } from './MenuDropdown.styles';

const MenuDropdown = () => {
  const { menuDropdown, openMenu, closeMenu } = useContext(GifContext);
  return (
    <div onMouseEnter={openMenu} onMouseLeave={closeMenu}>
      <Black />
      {menuDropdown && (
        <MenuDropdownContainer>
          <div style={{ width: '40%' }}>
            <h1>Categories</h1>
            <hr />
            <div style={{ display: 'flex' }}>
              <ul>
                <li>Actions</li>
                <li>Adjectives</li>
                <li>Art & Design</li>
                <li>Cartoons & Comics</li>
                <li>Decades</li>
                <li>Emotions</li>
              </ul>
              <ul>
                <li>Fashion & Beauty</li>
                <li>Music</li>
                <li>Nature</li>
                <li>TV</li>
                <li>Weird</li>
              </ul>
            </div>
          </div>
          <div style={{ width: '40%' }}>
            <h1>About</h1>
            <hr />
            <ul>
              <li>Twitter</li>
              <li>Github</li>
              <li>Portfolio</li>
            </ul>
          </div>
        </MenuDropdownContainer>
      )}
    </div>
  );
};

export default MenuDropdown;
