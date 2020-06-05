import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const url = 'https://urldev-mern-jiffy-api.herokuapp.com';
  const [user, setUser] = useState({});
  const [token, setToken] = useState({});
  const [favorite, setFavorite] = useState([]);
  const [userDropdown, setUserDropdown] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    getFavorites();
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
    };
    const token = JSON.parse(localStorage.getItem('userToken'));

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await axios.post(`${url}/`, favoriteGif, config);
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
    if (!favorite.some((addedGif) => addedGif.gif[0].id === gif.id)) {
      await addFavorite(gif);
    } else {
      favorite.filter(
        async (addedGif) =>
          addedGif.gif[0].id === gif.id && (await deleteFavorite(addedGif))
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

  return (
    <UserContext.Provider
      value={{
        url,
        user,
        setUser,
        token,
        setToken,
        favorite,
        setFavorite,
        addFavorite,
        deleteFavorite,
        addDeleteFavorite,
        userDropdown,
        openAndCloseUserDropdown,
        openUserDropdown,
        closeUserDropdown,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
