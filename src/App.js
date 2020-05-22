import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GifContextProvider from './context/GifContext';

import Nav from './components/nav/Nav';
import SearchBar from './components/searchBar/SearchBar';
import Home from './components/home/Home';
import Gif from './components/gif/Gif';

import { AppContainer } from './App.styles';

function App() {
  return (
    <AppContainer>
      <GifContextProvider>
        <Nav />
        <SearchBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={Gif} />
        </Switch>
      </GifContextProvider>
    </AppContainer>
  );
}

export default App;
