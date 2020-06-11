import React, { useContext } from 'react';

import { UserContext } from '../../context/UserContext';

import DefaultUserMenuDropdown from '../defaultUserMenuDropdown/DefaultUserMenuDropdown';

import { UserModal } from '../userMenuDropdown/UserMenuDropdown.styles.js';

const ModalUserMenuDropdown = () => {
  const { userDropdown, openAndCloseUserDropdown } = useContext(UserContext);
  return (
    <>
      {userDropdown && (
        <UserModal onClick={openAndCloseUserDropdown}>
          <DefaultUserMenuDropdown visible={false} />
        </UserModal>
      )}
    </>
  );
};

export default ModalUserMenuDropdown;
