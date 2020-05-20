import React, { createContext, useState, useEffect } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Gif, Grid, Carousel } from '@giphy/react-components';
require('dotenv').config();

export const GifContext = createContext();

const gifFetch = new GiphyFetch(process.env.REACT_APP_GIPHY_SDK_KEY);

const GifContextProvider = (props) => {
  const [gif, setGif] = useState({});

  useEffect(() => {
    // getTrending();
    console.log(gif);
  }, [gif]);

  // const getTrending = async () => {
  //   const { data } = await gifFetch.trending();
  //   setGif(data);
  // };
  return (
    <GifContext.Provider value={{ gif }}>{props.children}</GifContext.Provider>
  );
};

export default GifContextProvider;
