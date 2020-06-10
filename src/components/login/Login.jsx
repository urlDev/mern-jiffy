import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toaster from 'toasted-notes';

import { GifContext } from '../../context/GifContext';
import { UserContext } from '../../context/UserContext';

import NotificationComponent from '../notificationComponent/NotificationComponent';

import { Form, DirectLink } from '../form/Form.styles';

const Login = () => {
  const [input, setInput] = useState({});
  const { changeInLogin } = useContext(GifContext);
  const {
    url,

    setUser,
    setToken,
    history,
  } = useContext(UserContext);

  const handleChange = (e) =>
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/profile/login`, input);
      const { data } = response;
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('userToken', JSON.stringify(data.token));
      setUser(data.user);
      setToken(data.token);
      toaster.notify(
        () => (
          <NotificationComponent
            text={`Welcome! Enjoy your time`}
            success={true}
          />
        ),
        { duration: 1500 }
      );
      history.push('/');
    } catch (error) {
      console.log(error);
      toaster.notify(
        () => (
          <NotificationComponent
            text={'Oops! Something went wrong!'}
            success={false}
          />
        ),
        { duration: 1500 }
      );
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button>Log in</button>
      </Form>
      <DirectLink>
        Don't have an account?
        <Link to="/profile/register" onClick={changeInLogin}>
          Register
        </Link>
      </DirectLink>
    </>
  );
};

export default Login;
