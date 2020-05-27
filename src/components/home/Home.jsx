import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from '../nav/Nav';
import SearchBar from '../searchBar/SearchBar';
import HomeComponents from '../homeComponents/HomeComponents';
import Gif from '../gif/Gif';
import Category from '../category/Category';
import SearchResult from '../searchResult/SearchResult';

const Home = () => {
  return (
    <>
      <Nav />
      <SearchBar />
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
    </>
  );
};

export default Home;
