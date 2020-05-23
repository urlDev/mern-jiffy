import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GifContext } from '../../context/GifContext';

import { Form, DirectLink } from '../form/Form.styles';

const Login = () => {
  const { changeInLogin } = useContext(GifContext);
  return (
    <>
      <Form action="">
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
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
