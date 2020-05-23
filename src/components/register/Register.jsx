import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GifContext } from '../../context/GifContext';

import { Form, DirectLink } from '../form/Form.styles';

const Register = () => {
  const { changeInLogin } = useContext(GifContext);
  return (
    <>
      <Form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
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
