import React, { useContext } from 'react';
import axios from 'axios';
import toaster from 'toasted-notes';

import { UserContext } from '../../context/UserContext';

import NotificationComponent from '../notificationComponent/NotificationComponent';

import { AvatarContainer } from './ProfileImage.styles';
import 'toasted-notes/src/styles.css';

const ProfileImage = () => {
  const { user, url } = useContext(UserContext);

  const handleChange = async (e) => {
    console.log(e.target.files[0]);
    const token = JSON.parse(localStorage.getItem('userToken'));

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const data = new FormData();
    data.append('avatar', e.target.files[0]);

    try {
      await axios.post(`${url}/profile/avatar`, data, config);
      window.location.reload(false);
      toaster.notify(
        () => (
          <NotificationComponent
            text={'Avatar is changed! Wow, that looks amazing! ;)'}
            color={'var(--light-green)'}
          />
        ),
        { duration: 1500 }
      );
    } catch (error) {
      toaster.notify(
        () => (
          <NotificationComponent
            text={'Oops! Something went wrong!'}
            color={'var(--indian-red)'}
          />
        ),
        { duration: 1500 }
      );
      console.log(error.message);
    }
  };

  return (
    <AvatarContainer>
      <img src={`${url}/profile/${user._id}/avatar`} alt="avatar" />
      <form>
        <label htmlFor="single">Change Avatar</label>
        <input type="file" id="single" onChange={handleChange} />
      </form>
    </AvatarContainer>
  );
};

export default ProfileImage;
