import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from '../nav/Nav';
import SearchBar from '../searchBar/SearchBar';
import HomeComponents from '../homeComponents/HomeComponents';
import Gif from '../gif/Gif';

const Home = () => {
  return (
    <>
      <Nav />
      <SearchBar />
      <Switch>
        <Route path="/:id" component={Gif} />
        <Route exact path="/" component={HomeComponents} />
      </Switch>
    </>
  );
};

export default Home;
