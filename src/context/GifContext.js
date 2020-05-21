import React, { createContext, useState, useEffect } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
require('dotenv').config();

export const GifContext = createContext();

const gifFetch = new GiphyFetch(process.env.REACT_APP_GIPHY_SDK_KEY);

const GifContextProvider = (props) => {
  const [trending, setTrending] = useState({});
  const [emoji, setEmoji] = useState({});
  const [siliconValley, setSiliconValley] = useState({});
  const [menuDropdown, setMenuDropdown] = useState(false);

  useEffect(() => {
    getTrending();
    getEmoji();
    getSiliconValley();
  }, []);

  const getTrending = async () => {
    const { data } = await gifFetch.trending({ limit: 5 });
    setTrending(data);
  };

  const getEmoji = async () => {
    const { data } = await gifFetch.emoji({ limit: 5 });

    setEmoji(data);
  };

  const getSiliconValley = async () => {
    const { data } = await gifFetch.gifs('tv', 'silicon-valley');
    setSiliconValley(data.slice(6, 11));
  };

  const openMenu = () => {
    setMenuDropdown(true);
  };
  const closeMenu = () => {
    setMenuDropdown(false);
  };
  return (
    <GifContext.Provider
      value={{
        trending,
        emoji,
        siliconValley,
        menuDropdown,
        openMenu,
        closeMenu,
      }}
    >
      {props.children}
    </GifContext.Provider>
  );
};

export default GifContextProvider;
