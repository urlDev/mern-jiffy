import React, { useContext, useState } from 'react';
import axios from 'axios';
import toaster from 'toasted-notes';

import { UserContext } from '../../context/UserContext';

import NotificationComponent from '../notificationComponent/NotificationComponent';

import { Form } from '../form/Form.styles';
import { UpdateContainer } from './ProfileUpdate.styles';
import 'toasted-notes/src/styles.css';

const ProfileUpdate = () => {
  const [input, setInput] = useState({});
  const { user, url, setUser } = useContext(UserContext);

  const handleChange = (e) =>
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('userToken'));

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await axios.patch(`${url}/profile`, input, config);
      const { data } = await response;
      localStorage.setItem('user', JSON.stringify(data));
      setUser(data);
      toaster.notify(
        () => (
          <NotificationComponent
            text={'Your account is updated successfully! :)'}
            success={true}
          />
        ),
        { duration: 1500 }
      );
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

  const openToast = () => {
    !input.password &&
      toaster.notify(
        () => (
          <NotificationComponent
            text={'Please enter your password'}
            success={false}
          />
        ),
        { duration: 1500 }
      );
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
        <button onClick={openToast}>Save</button>
      </Form>
    </UpdateContainer>
  );
};

export default ProfileUpdate;
