import React, { useContext } from 'react';

import { UserContext } from '../../context/UserContext';

import {
  UserDropdownContainer,
  UserDropdownBlack,
  LinkContainer,
} from './UserMenuDropdown.styles';

const UserMenuDropdown = () => {
  const { userDropdown, openUserDropdown, closeUserDropdown } = useContext(
    UserContext
  );
  return (
    <div onMouseEnter={openUserDropdown} onMouseLeave={closeUserDropdown}>
      {userDropdown && (
        <>
          <UserDropdownBlack />
          <UserDropdownContainer>
            <LinkContainer to="/profile/favorites">Favorites</LinkContainer>
            <LinkContainer to="/profile/details">Profile</LinkContainer>
            <LinkContainer to="/profile">Log out</LinkContainer>
          </UserDropdownContainer>
        </>
      )}
    </div>
  );
};

export default UserMenuDropdown;
