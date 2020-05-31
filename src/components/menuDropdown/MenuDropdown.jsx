import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GifContext } from '../../context/GifContext';

import { MenuDropdownContainer, Black } from './MenuDropdown.styles';

const MenuDropdown = () => {
  const {
    scroll,
    menuDropdown,
    openMenu,
    closeMenu,
    getCategory,
    clearInput,
  } = useContext(GifContext);
  return (
    <div onMouseEnter={openMenu} onMouseLeave={closeMenu}>
      {menuDropdown && (
        <>
          <Black />
          <MenuDropdownContainer>
            <div style={{ width: '40%' }}>
              <h1>Categories</h1>
              <hr />
              <div style={{ display: 'flex' }}>
                <ul>
                  <li>
                    <Link
                      to="/actions"
                      onClick={() => {
                        getCategory('actions');
                        clearInput();
                      }}
                    >
                      Actions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/adjectives"
                      onClick={() => {
                        getCategory('adjectives');
                        clearInput();
                      }}
                    >
                      Adjectives
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/artdesign"
                      onClick={() => {
                        getCategory('art-design');
                        clearInput();
                      }}
                    >
                      Art & Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cartoonscomics"
                      onClick={() => {
                        getCategory('cartoons-comics');
                        clearInput();
                      }}
                    >
                      Cartoons & Comics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/decades"
                      onClick={() => {
                        getCategory('decades');
                        clearInput();
                      }}
                    >
                      Decades
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/emotions"
                      onClick={() => {
                        getCategory('emotions');
                        clearInput();
                      }}
                    >
                      Emotions
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      to="/fashionbeauty"
                      onClick={() => {
                        getCategory('fashion-beauty');
                        clearInput();
                      }}
                    >
                      Fashion & Beauty
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/music"
                      onClick={() => {
                        getCategory('music');
                        clearInput();
                      }}
                    >
                      Music
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/nature"
                      onClick={() => {
                        getCategory('nature');
                        clearInput();
                      }}
                    >
                      Nature
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tv"
                      onClick={() => {
                        getCategory('tv');
                        clearInput();
                      }}
                    >
                      TV
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/weird"
                      onClick={() => {
                        getCategory('weird');
                        clearInput();
                      }}
                    >
                      Weird
                    </Link>
                  </li>
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
        </>
      )}
    </div>
  );
};

export default MenuDropdown;
