import React, { useContext } from 'react';
import { GifContext } from '../../context/GifContext';
import { Switch, Route } from 'react-router-dom';

import Login from '../login/Login';
import Register from '../register/Register';

import { StyledLink, LoginRegister } from '../nav/Nav.styles';
import { LoginRegisterNav, FormContainer, Video } from './LoginRegister.styles';

const LoginRegisterComponent = () => {
  const { inLogin } = useContext(GifContext);
  return (
    <>
      <Video preload="auto" autoPlay muted loop>
        <source
          src={require('../../assets/backgroundVideo.mp4')}
          type="video/mp4"
        />
      </Video>

      <LoginRegisterNav>
        <StyledLink to="/">
          <img
            src={require('../../assets/neonHeartFull.svg')}
            alt="Jiffy Logo"
          />
          JIFFY <span>Login</span>
        </StyledLink>
        <LoginRegister
          style={{ position: 'relative', top: '-2px' }}
          to="/profile"
        >
          <div
            style={{
              width: '20%',
              backgroundColor: '#515151',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <i className="fas fa-user"></i>
          </div>
          <div
            style={{
              width: '80%',
              backgroundColor: '#414141',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {inLogin ? <h5>Register</h5> : <h5>Log in</h5>}
          </div>
        </LoginRegister>
      </LoginRegisterNav>
      <FormContainer>
        <Switch>
          <Route exact path="/profile" component={Login} />
          <Route path="/profile/login" component={Login} />
          <Route path="/profile/register" component={Register} />
        </Switch>
      </FormContainer>
    </>
  );
};

export default LoginRegisterComponent;
