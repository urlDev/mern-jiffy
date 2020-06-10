import React, { useContext } from 'react';

import { GifContext } from '../../context/GifContext';

import DefaultMenuDropdown from '../defaultMenuDropdown/DefaultMenuDropdown';

import { Dropdown } from '../menuDropdown/MenuDropdown.styles.js';

const ModalMenuDropdown = () => {
  const { menuDropdown, openAndCloseMenu } = useContext(GifContext);
  return (
    <>
      {menuDropdown && (
        <Dropdown onClick={openAndCloseMenu}>
          <DefaultMenuDropdown />
        </Dropdown>
      )}
    </>
  );
};

export default ModalMenuDropdown;
