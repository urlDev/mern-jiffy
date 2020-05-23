import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GifContextProvider from './context/GifContext';

import Home from './components/home/Home';
import LoginRegisterComponent from './components/loginRegisterComponent/LoginRegisterComponent';

import { AppContainer } from './App.styles';

function App() {
  return (
    <AppContainer>
      <GifContextProvider>
        <Switch>
          <Route path="/profile" component={LoginRegisterComponent} />
          <Route path="/" component={Home} />
        </Switch>
      </GifContextProvider>
    </AppContainer>
  );
}

export default App;
