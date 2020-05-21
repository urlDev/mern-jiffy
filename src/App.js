import React from 'react';

import GifContextProvider from './context/GifContext';

import Nav from './components/nav/Nav';
import SearchBar from './components/searchBar/SearchBar';
import WeCare from './components/weCare/WeCare';
import Trending from './components/trending/Trending';
import Emoji from './components/emoji/Emoji';
import SiliconValley from './components/siliconValley/SiliconValley';

import { AppContainer } from './App.styles';

function App() {
  return (
    <AppContainer>
      <GifContextProvider>
        <Nav />
        <SearchBar />
        <WeCare />
        <Trending />
        <Emoji />
        <SiliconValley />
      </GifContextProvider>
    </AppContainer>
  );
}

export default App;
