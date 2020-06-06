import React, { useContext, useState } from 'react';
import axios from 'axios';

import { UserContext } from '../../context/UserContext';

import { Form } from '../form/Form.styles';
import { UpdateContainer } from './ProfileUpdate.styles';

const ProfileUpdate = () => {
  const [input, setInput] = useState({});
  const { user, url, setUser } = useContext(UserContext);

  const handleChange = (e) =>
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    const token = JSON.parse(localStorage.getItem('userToken'));

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await axios.patch(`${url}/profile`, input, config);
      const { data } = await response;
      localStorage.setItem('user', JSON.stringify(data));
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UpdateContainer>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name / Username</label>
          <input
            type="text"
            name="name"
            value={input.name || user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={input.email || user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <button>Save</button>
      </Form>
    </UpdateContainer>
  );
};

export default ProfileUpdate;
