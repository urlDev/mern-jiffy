import React, { useContext } from 'react';

import { GifContext } from '../../context/GifContext';

import DefaultMenuDropdown from '../defaultMenuDropdown/DefaultMenuDropdown';

import { Black } from './MenuDropdown.styles';

const MenuDropdown = () => {
  const { menuDropdown, openMenu, closeMenu } = useContext(GifContext);
  return (
    <div onMouseEnter={openMenu} onMouseLeave={closeMenu}>
      {menuDropdown && (
        <>
          <Black />
          <DefaultMenuDropdown />
        </>
      )}
    </div>
  );
};

export default MenuDropdown;
