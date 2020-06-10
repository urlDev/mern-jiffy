import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { GifContext } from '../../context/GifContext';

import Nav from '../nav/Nav';
import SearchBar from '../searchBar/SearchBar';
import Home from '../home/Home';
import Gif from '../gif/Gif';
import Category from '../category/Category';
import SearchResult from '../searchResult/SearchResult';
import SearchModal from '../searchModal/SearchModal';
import FixedSearchBar from '../fixedSearchBar/FixedSearchBar';
import FixedNavWithSearch from '../fixedNavWithSearch/FixedNavWithSearch';
import UserMenuDropdown from '../userMenuDropdown/UserMenuDropdown';
import ModalUserMenuDropdown from '../modalUserMenuDropdown/ModalUserMenuDropdown';
import MenuDropdown from '../menuDropdown/MenuDropdown';
import ModalMenuDropdown from '../modalMenuDropdown/ModalMenuDropdown';

const HomeComponents = () => {
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
      <FixedSearchBar />
      <SearchModal />
      <Switch>
        {/* 
      In here, I am using regex to match only words.
      Category only consists words and slug is mix of words with numbers      
      */}
        <Route path="/search/:name" render={() => <SearchResult />} />
        <Route path={`/:categoryName(\\w+)`} render={() => <Category />} />
        <Route path="/:slug" render={() => <Gif />} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default HomeComponents;
