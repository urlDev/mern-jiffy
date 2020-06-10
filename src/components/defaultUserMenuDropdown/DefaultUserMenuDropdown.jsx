import React, { useContext } from 'react';

import { UserContext } from '../../context/UserContext';

import {
  UserDropdownContainer,
  LinkContainer,
} from '../userMenuDropdown/UserMenuDropdown.styles';

const DefaultUserMenuDropdown = () => {
  const { closeUserDropdown, logOut } = useContext(UserContext);
  return (
    <UserDropdownContainer>
      <LinkContainer
        to="/profile/details"
        onClick={() => {
          closeUserDropdown();
        }}
      >
        Profile
      </LinkContainer>
      <LinkContainer to="/profile/favorites" onClick={closeUserDropdown}>
        Favorites
      </LinkContainer>

      <LinkContainer
        to="/"
        onClick={() => {
          logOut();
          closeUserDropdown();
        }}
      >
        Log out
      </LinkContainer>
    </UserDropdownContainer>
  );
};

export default DefaultUserMenuDropdown;
