import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { GifContext } from '../../context/GifContext';
import { UserContext } from '../../context/UserContext';

import ProfileComponents from '../profileComponents/ProfileComponents';
import Login from '../login/Login';
import Register from '../register/Register';

import { StyledLink, LoginRegister } from '../nav/Nav.styles';
import { LoginRegisterNav, FormContainer, Video } from './LoginRegister.styles';

const LoginRegisterComponent = () => {
  const { user } = useContext(UserContext);
  const { inLogin, width } = useContext(GifContext);
  return (
    <>
      {user.name ? (
        <ProfileComponents />
      ) : (
        <>
          <Video
            preload="auto"
            poster={require('../../assets/backgroundPoster.png')}
            autoPlay
            muted
            loop
          >
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
            <LoginRegister to="/profile/login">
              {width > 500 ? (
                <>
                  <div
                    style={{
                      width: '20%',
                      backgroundColor: '#515151',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: '-1px',
                    }}
                    className="right"
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
                    className="responsive"
                  >
                    {inLogin ? <h5>Register</h5> : <h5>Log in</h5>}
                  </div>
                </>
              ) : (
                <div
                  style={{
                    width: '100%',
                    backgroundColor: '#414141',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  className="responsive"
                >
                  {inLogin ? <h5>Register</h5> : <h5>Log in</h5>}
                </div>
              )}
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
      )}
    </>
  );
};

export default LoginRegisterComponent;
