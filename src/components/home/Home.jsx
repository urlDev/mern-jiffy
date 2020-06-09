import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { GifContext } from '../../context/GifContext';

import Nav from '../nav/Nav';
import SearchBar from '../searchBar/SearchBar';
import HomeComponents from '../homeComponents/HomeComponents';
import Gif from '../gif/Gif';
import Category from '../category/Category';
import SearchResult from '../searchResult/SearchResult';
import SearchModal from '../searchModal/SearchModal';
import FixedSearchBar from '../fixedSearchBar/FixedSearchBar';
import FixedNavWithSearch from '../fixedNavWithSearch/FixedNavWithSearch';
import UserMenuDropdown from '../userMenuDropdown/UserMenuDropdown';
import MenuDropdown from '../menuDropdown/MenuDropdown';

const Home = () => {
  const { width } = useContext(GifContext);
  return (
    <div style={{ position: 'relative' }}>
      {width < 1080 ? <FixedNavWithSearch /> : <Nav />}
      {width > 1080 && <SearchBar />}
      <SearchModal />
      <FixedSearchBar />
      <UserMenuDropdown />
      <MenuDropdown />
      {width < 1080 && <div style={{ height: '127px' }}></div>}
      <Switch>
        {/* 
      In here, I am using regex to match only words.
      Category only consists words and slug is mix of words with numbers      
      */}
        <Route path="/search/:name" render={() => <SearchResult />} />
        <Route path={`/:categoryName(\\w+)`} render={() => <Category />} />
        <Route path="/:slug" render={() => <Gif />} />
        <Route exact path="/" component={HomeComponents} />
      </Switch>
    </div>
  );
};

export default Home;
