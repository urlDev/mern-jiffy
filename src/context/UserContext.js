import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import toaster from 'toasted-notes';
import moment from 'moment';

import { useHistory } from 'react-router-dom';

import NotificationComponent from '../components/notificationComponent/NotificationComponent';

import 'toasted-notes/src/styles.css';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  let history = useHistory();
  const url = 'https://urldev-mern-jiffy-api.herokuapp.com';
  const [user, setUser] = useState({});
  const [token, setToken] = useState({});
  const [favorite, setFavorite] = useState([]);
  const [userDropdown, setUserDropdown] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUser(user);
    }
  }, []);

  const getFavorites = async () => {
    const token = JSON.parse(localStorage.getItem('userToken'));

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await axios.get(`${url}/`, config);
      const { data } = await response;
      setFavorite(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addFavorite = async (gif) => {
    const favoriteGif = {
      gif: gif,
      added: moment().format(),
    };
    const token = JSON.parse(localStorage.getItem('userToken'));

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      await axios.post(`${url}/`, favoriteGif, config);
      setFavorite([...favorite, gif]);
      getFavorites();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFavorite = async (gif) => {
    const token = JSON.parse(localStorage.getItem('userToken'));

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      await axios.delete(`${url}/${gif._id}`, config);
      getFavorites();
    } catch (error) {
      console.log({ error });
    }
  };

  const addDeleteFavorite = async (gif) => {
    if (
      !favorite.some((addedGif) => addedGif && addedGif.gif[0].id === gif.id)
    ) {
      await addFavorite(gif);
    } else {
      favorite.filter(
        async (addedGif) =>
          addedGif.gif[0].id === gif.id && (await deleteFavorite(addedGif))
      );
    }
  };

  const logOut = async () => {
    const token = JSON.parse(localStorage.getItem('userToken'));

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      await axios.post(`${url}/profile/logout`, null, config);
      setUser({});
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAccount = async () => {
    const token = JSON.parse(localStorage.getItem('userToken'));

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      await axios.delete(`${url}/profile`, config);
      setUser({});
      setFavorite([]);
      localStorage.clear();
      history.push('/');
      toaster.notify(
        () => (
          <NotificationComponent
            text={'Sad to see you go! Account is deleted :('}
            color={'var(--light-green)'}
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
            color={'var(--indian-red)'}
          />
        ),
        { duration: 1500 }
      );
    }
  };

  const openAndCloseUserDropdown = () => {
    setUserDropdown(!userDropdown);
  };

  const openUserDropdown = () => {
    setUserDropdown(true);
  };

  const closeUserDropdown = () => {
    setUserDropdown(false);
  };

  const openAndCloseDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

  return (
    <UserContext.Provider
      value={{
        url,
        user,
        setUser,
        token,
        setToken,
        favorite,
        getFavorites,
        setFavorite,
        addFavorite,
        deleteFavorite,
        addDeleteFavorite,
        history,
        logOut,
        deleteAccount,
        userDropdown,
        openAndCloseUserDropdown,
        openUserDropdown,
        closeUserDropdown,
        deleteModal,
        openAndCloseDeleteModal,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
