import React, { useContext } from 'react';

import { UserContext } from '../../context/UserContext';

import DefaultUserMenuDropdown from '../defaultUserMenuDropdown/DefaultUserMenuDropdown';

import { UserDropdownBlack } from './UserMenuDropdown.styles';

const UserMenuDropdown = () => {
  const { userDropdown, openUserDropdown, closeUserDropdown } = useContext(
    UserContext
  );
  return (
    <div onMouseEnter={openUserDropdown} onMouseLeave={closeUserDropdown}>
      {userDropdown && (
        <>
          <UserDropdownBlack />
          <DefaultUserMenuDropdown />
        </>
      )}
    </div>
  );
};

export default UserMenuDropdown;
