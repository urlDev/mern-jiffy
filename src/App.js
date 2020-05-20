import React from 'react';

import GifContextProvider from './context/GifContext';

import Nav from './components/nav/Nav';
import MenuDropdown from './components/menuDropdown/MenuDropdown';

import { AppContainer } from './App.styles';

function App() {
  return (
    <AppContainer>
      <GifContextProvider>
        <Nav />
        <MenuDropdown />
      </GifContextProvider>
    </AppContainer>
  );
}

export default App;
