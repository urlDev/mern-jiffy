import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import toaster from "toasted-notes";
import moment from "moment";
import { Buffer } from "buffer";

import { useHistory } from "react-router-dom";

import NotificationComponent from "../components/notificationComponent/NotificationComponent";

import "toasted-notes/src/styles.css";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  let history = useHistory();
  const url = process.env.REACT_APP_API_URL;
  // Added an initial user function here that will run only once
  const initialUser = () => JSON.parse(localStorage.getItem("user")) || {};
  // if there is initial user, it will get from localStorage, if not, user is empty object
  const [user, setUser] = useState(initialUser);
  const [token, setToken] = useState({});
  const [favorite, setFavorite] = useState([]);
  const [userDropdown, setUserDropdown] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState({});

  // to get images after uploading with their latest, I am fetching them from
  // endpoint I created. Then converting it to binary to show as image
  const getImage = useCallback(async () => {
    try {
      const response = await axios.get(`${url}/profile/${user._id}/avatar`);
      const png = await Buffer.from(response.data.png, "binary").toString(
        "base64"
      );
      const webp =
        response.data.webp &&
        (await Buffer.from(response.data.webp, "binary").toString("base64"));
      setImage({
        png,
        webp,
      });

      console.log(webp);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (user.name) {
      getFavorites();
      getImage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, getImage]);

  const getFavorites = async () => {
    const token = JSON.parse(localStorage.getItem("userToken"));

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
    // On server side, I set gifs as arrays
    // And each favorite gif has added time so I can show when user
    // liked a gif
    const favoriteGif = {
      gif: gif,
      added: moment().format(),
    };
    const token = JSON.parse(localStorage.getItem("userToken"));

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
    const token = JSON.parse(localStorage.getItem("userToken"));

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
    if (user.name) {
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
    } else {
      history.push("/profile");
    }
  };

  const logOut = async () => {
    const token = JSON.parse(localStorage.getItem("userToken"));

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      await axios.post(`${url}/profile/logout`, null, config);
      setUser({});
      setLoading(false);
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAccount = async () => {
    const token = JSON.parse(localStorage.getItem("userToken"));

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      await axios.delete(`${url}/profile`, config);
      setUser({});
      setFavorite([]);
      localStorage.clear();
      history.push("/");
      setLoading(false);
      toaster.notify(
        () => (
          <NotificationComponent
            text={"Sad to see you go! Account is deleted :("}
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
            text={"Oops! Something went wrong!"}
            success={false}
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
        loading,
        setLoading,
        image,
        getImage,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
