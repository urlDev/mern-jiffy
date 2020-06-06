import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from '../nav/Nav';
import SearchBar from '../searchBar/SearchBar';
import ProfileFavorites from '../profileFavorites/ProfileFavorites';
import ProfileDetails from '../profileDetails/ProfileDetails';

const ProfileComponents = () => {
  return (
    <>
      <Nav />
      <SearchBar />
      <Switch>
        <Route path="/profile/favorites" component={ProfileFavorites} />
        <Route path="/profile/details" component={ProfileDetails} />
      </Switch>
    </>
  );
};

export default ProfileComponents;
