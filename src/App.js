import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GifContextProvider from './context/GifContext';
import UserContextProvider from './context/UserContext';

import HomeComponents from './components/homeComponents/HomeComponents';
import LoginRegisterComponent from './components/loginRegisterComponent/LoginRegisterComponent';

import { AppContainer } from './App.styles';

function App() {
  return (
    <AppContainer>
      <UserContextProvider>
        <GifContextProvider>
          <Switch>
            <Route path="/profile" component={LoginRegisterComponent} />
            <Route path="/" component={HomeComponents} />
          </Switch>
        </GifContextProvider>
      </UserContextProvider>
    </AppContainer>
  );
}

export default App;
