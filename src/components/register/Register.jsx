import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toaster from 'toasted-notes';

import { UserContext } from '../../context/UserContext';
import { GifContext } from '../../context/GifContext';

import NotificationComponent from '../notificationComponent/NotificationComponent';

import { Form, DirectLink } from '../form/Form.styles';
import 'toasted-notes/src/styles.css';

const Register = () => {
  const [input, setInput] = useState({});
  const { changeInLogin } = useContext(GifContext);
  const { url, setUser, setToken, history } = useContext(UserContext);

  const handleChange = (e) =>
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/profile/register`, input);
      const { data } = await response;
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
      console.log(error.message);
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
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
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
        <button>Register</button>
      </Form>
      <DirectLink>
        Already have an account?
        <Link to="/profile/login" onClick={changeInLogin}>
          Log in
        </Link>
      </DirectLink>
    </>
  );
};

export default Register;
