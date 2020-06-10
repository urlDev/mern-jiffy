import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GifContext } from '../../context/GifContext';

import { MenuDropdownContainer } from '../menuDropdown/MenuDropdown.styles';
const DefaultMenuDropdown = () => {
  const { closeMenu, getCategory, clearInput } = useContext(GifContext);
  return (
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
                  closeMenu();
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
                  closeMenu();
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
                  closeMenu();
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
                  closeMenu();
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
                  closeMenu();
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
                  closeMenu();
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
                  closeMenu();
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
                  closeMenu();
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
                  closeMenu();
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
                  closeMenu();
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
                  closeMenu();
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
          <li>
            <a
              href="https://twitter.com/urlDev"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/urlDev"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.can-ural.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </MenuDropdownContainer>
  );
};

export default DefaultMenuDropdown;
