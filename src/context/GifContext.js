import React, { createContext, useState, useEffect, useCallback } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import axios from 'axios';
require('dotenv').config();

export const GifContext = createContext();

const gifFetch = new GiphyFetch(process.env.REACT_APP_GIPHY_SDK_KEY);

const GifContextProvider = (props) => {
  const [trending, setTrending] = useState({});
  const [emoji, setEmoji] = useState({});
  const [siliconValley, setSiliconValley] = useState({});
  const [gif, setGif] = useState({});
  const [related, setRelated] = useState({});
  const [category, setCategory] = useState({});
  const [searchCategoryResult, setSearchCategoryResult] = useState({});
  const [width, setWidth] = useState(window.innerWidth);
  const [scroll, setScroll] = useState(0);
  const [inLogin, setInLogin] = useState(false);
  const [menuDropdown, setMenuDropdown] = useState(false);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState({});
  const [input, setInput] = useState('');

  const getNoResultSearchTerm = useCallback(() => {
    if (
      searchCategoryResult.data &&
      !Object.entries(searchCategoryResult.data).length
    ) {
      searchCategory(`${search[1].name}`);
    }
  }, [search, searchCategoryResult]);

  useEffect(() => {
    getTrending();
    getEmoji();
    getSiliconValley();
    getNoResultSearchTerm();
    window.addEventListener('resize', updateWidth);
    document.addEventListener('scroll', updateScroll);
    updateScroll();

    return () => {
      window.removeEventListener('resize', updateWidth);
      document.removeEventListener('scroll', updateScroll);
    };
  }, [searchCategoryResult, getNoResultSearchTerm]);

  const updateScroll = () => {
    if (window.scrollY <= 62) {
      setScroll(0);
    }
    if (window.scrollY > 62) {
      setScroll(window.scrollY);
    }
  };

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const changeInLogin = () => {
    setInLogin(!inLogin);
  };

  const getTrending = async () => {
    const { data } = await gifFetch.trending({ limit: 5 });
    setTrending(data);
  };

  const getEmoji = async () => {
    const { data } = await gifFetch.emoji();
    const random = Math.floor(Math.random() * 3);
    setEmoji(data.slice(random, random + 5));
  };

  const getSiliconValley = async () => {
    const { data } = await gifFetch.gifs('tv', 'silicon-valley');
    const random = Math.floor(Math.random() * 3);
    setSiliconValley(data.slice(random, random + 5));
  };

  const getGif = async (gif) => {
    setGif(gif);
  };

  const getCategory = async (topic) => {
    const result = await gifFetch.subcategories(`${topic}`, { limit: 200 });
    setCategory({
      title: topic,
      data: result.data,
    });
  };

  const searchCategory = async (topic) => {
    setSearchCategoryResult({});
    const result = await gifFetch.search(`${topic}`, {
      sort: 'recent',
      limit: 100,
    });
    setSearchCategoryResult({
      title: topic,
      data: result.data,
    });
  };

  const searchTerm = async (topic) => {
    const result = await axios.get(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${topic}&limit=25&offset=0&rating=G&lang=en`
    );
    setSearch(result.data.data);
  };

  const clearInput = () => {
    setInput(``);
    setSearch({});
  };

  const fetchGifs = (offset: number) =>
    gifFetch.related(`${gif.id}`, { offset, limit: 10 });

  const openMenu = () => {
    setMenuDropdown(true);
  };
  const closeMenu = () => {
    setMenuDropdown(false);
  };

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <GifContext.Provider
      value={{
        trending,
        emoji,
        gif,
        width,
        scroll,
        inLogin,
        category,
        getCategory,
        searchCategory,
        searchCategoryResult,
        searchTerm,
        getNoResultSearchTerm,
        search,
        input,
        setInput,
        clearInput,
        changeInLogin,
        fetchGifs,
        siliconValley,
        menuDropdown,
        openMenu,
        closeMenu,
        modal,
        openModal,
        closeModal,
        getGif,
      }}
    >
      {props.children}
    </GifContext.Provider>
  );
};

export default GifContextProvider;
