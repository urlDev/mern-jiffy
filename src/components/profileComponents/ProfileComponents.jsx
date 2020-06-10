import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { GifContext } from '../../context/GifContext';

import Nav from '../nav/Nav';
import FixedNavWithSearch from '../fixedNavWithSearch/FixedNavWithSearch';
import SearchBar from '../searchBar/SearchBar';
import ProfileFavorites from '../profileFavorites/ProfileFavorites';
import ProfileDetails from '../profileDetails/ProfileDetails';
import UserMenuDropdown from '../userMenuDropdown/UserMenuDropdown';
import ModalUserMenuDropdown from '../modalUserMenuDropdown/ModalUserMenuDropdown';
import MenuDropdown from '../menuDropdown/MenuDropdown';
import ModalMenuDropdown from '../modalMenuDropdown/ModalMenuDropdown';
import SearchModal from '../searchModal/SearchModal';

const ProfileComponents = () => {
  const { width } = useContext(GifContext);
  return (
    <div style={{ position: 'relative' }}>
      {width > 1080 ? (
        <>
          <Nav />
          <SearchBar />
          <MenuDropdown />
          <UserMenuDropdown />
        </>
      ) : (
        <>
          <FixedNavWithSearch />
          <div style={{ height: '127px' }}></div>
          <ModalMenuDropdown />
          <ModalUserMenuDropdown />
        </>
      )}

      <SearchModal />
      <Switch>
        <Route path="/profile/favorites" component={ProfileFavorites} />
        <Route path="/profile/details" component={ProfileDetails} />
      </Switch>
    </div>
  );
};

export default ProfileComponents;
