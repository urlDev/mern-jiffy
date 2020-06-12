import React, { useContext } from 'react';
import axios from 'axios';
import toaster from 'toasted-notes';

import { UserContext } from '../../context/UserContext';

import NotificationComponent from '../notificationComponent/NotificationComponent';

import { AvatarContainer } from './ProfileImage.styles';
import 'toasted-notes/src/styles.css';

const ProfileImage = () => {
  const { url, history, image, getImage } = useContext(UserContext);

  const handleChange = async (e) => {
    const token = JSON.parse(localStorage.getItem('userToken'));

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const data = new FormData();
    data.append('avatar', e.target.files[0]);

    try {
      await axios.post(`${url}/profile/avatar`, data, config);
      history.push('/');
      toaster.notify(
        () => (
          <NotificationComponent
            text={'Avatar is changed! Wow, that looks amazing! ;)'}
            success={true}
          />
        ),
        { duration: 2000 }
      );
      getImage();
    } catch (error) {
      toaster.notify(
        () => (
          <NotificationComponent
            text={'Oops! Something went wrong!'}
            success={false}
          />
        ),
        { duration: 1500 }
      );
      console.log(error);
    }
  };

  return (
    <AvatarContainer>
      {image.length && (
        <img src={`data:image/webp;base64,${image}`} alt="avatar" />
      )}
      <form>
        <label htmlFor="single">Change Avatar*</label>
        <input type="file" id="single" onChange={handleChange} />
      </form>
      <p>
        *Should be smaller than <span>2MB</span>
      </p>
    </AvatarContainer>
  );
};

export default ProfileImage;
