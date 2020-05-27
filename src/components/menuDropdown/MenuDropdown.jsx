import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GifContext } from '../../context/GifContext';

import { MenuDropdownContainer, Black } from './MenuDropdown.styles';

const MenuDropdown = () => {
  const { menuDropdown, openMenu, closeMenu, getCategory } = useContext(
    GifContext
  );
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
                    <Link to="/actions" onClick={() => getCategory('actions')}>
                      Actions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/adjectives"
                      onClick={() => getCategory('adjectives')}
                    >
                      Adjectives
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/artdesign"
                      onClick={() => getCategory('art-design')}
                    >
                      Art & Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cartoonscomics"
                      onClick={() => getCategory('cartoons-comics')}
                    >
                      Cartoons & Comics
                    </Link>
                  </li>
                  <li>
                    <Link to="/decades" onClick={() => getCategory('decades')}>
                      Decades
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/emotions"
                      onClick={() => getCategory('emotions')}
                    >
                      Emotions
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      to="/fashionbeauty"
                      onClick={() => getCategory('fashion-beauty')}
                    >
                      Fashion & Beauty
                    </Link>
                  </li>
                  <li>
                    <Link to="/music" onClick={() => getCategory('music')}>
                      Music
                    </Link>
                  </li>
                  <li>
                    <Link to="/nature" onClick={() => getCategory('nature')}>
                      Nature
                    </Link>
                  </li>
                  <li>
                    <Link to="/tv" onClick={() => getCategory('tv')}>
                      TV
                    </Link>
                  </li>
                  <li>
                    <Link to="/weird" onClick={() => getCategory('weird')}>
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
