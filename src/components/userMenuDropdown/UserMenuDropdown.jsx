import React, { useContext } from 'react';

import { UserContext } from '../../context/UserContext';

import {
  UserDropdownContainer,
  UserDropdownBlack,
  LinkContainer,
} from './UserMenuDropdown.styles';

const UserMenuDropdown = () => {
  const {
    userDropdown,
    openUserDropdown,
    closeUserDropdown,
    logOut,
  } = useContext(UserContext);
  return (
    <div onMouseEnter={openUserDropdown} onMouseLeave={closeUserDropdown}>
      {userDropdown && (
        <>
          <UserDropdownBlack />
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
        </>
      )}
    </div>
  );
};

export default UserMenuDropdown;
