import React, { createContext, useState, useEffect } from 'react';
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
  const [category, setCategory] = useState({});
  const [searchCategoryResult, setSearchCategoryResult] = useState({});
  const [width, setWidth] = useState(window.innerWidth);
  const [scroll, setScroll] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [inLogin, setInLogin] = useState(false);
  const [menuDropdown, setMenuDropdown] = useState(false);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState({});
  const [input, setInput] = useState('');

  useEffect(() => {
    getTrending();
    getEmoji();
    getSiliconValley();
    window.addEventListener('resize', updateWidth);
    document.addEventListener('scroll', updateScroll);
    updateScroll();

    return () => {
      window.removeEventListener('resize', updateWidth);
      document.removeEventListener('scroll', updateScroll);
    };
  }, [searchCategoryResult]);

  // Scroll variable is for showing an animation of logo and search bar
  // Based on how much user is scrolled
  const updateScroll = () => {
    if (window.scrollY <= 62) {
      setScroll(0);
    }
    if (window.scrollY > 62) {
      setScroll(window.scrollY);
    }
    setScrollY(window.scrollY);
  };

  // Width variable is for updating Grid components width(they want it as a prop)
  // and also showing components based it
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const changeInLogin = () => {
    setInLogin(!inLogin);
  };

  const getTrending = async () => {
    try {
      const { data } = await gifFetch.trending({ limit: 5 });
      setTrending(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getEmoji = async () => {
    try {
      const { data } = await gifFetch.emoji();
      const random = Math.floor(Math.random() * 3);
      setEmoji(data.slice(random, random + 5));
    } catch (error) {
      console.log(error);
    }
  };

  const getSiliconValley = async () => {
    try {
      const { data } = await gifFetch.gifs('tv', 'silicon-valley');
      const random = Math.floor(Math.random() * 3);
      setSiliconValley(data.slice(random, random + 5));
    } catch (error) {
      console.log(error);
    }
  };

  const getGif = (gif) => {
    setGif(gif);
  };

  const getCategory = async (topic) => {
    try {
      const result = await gifFetch.subcategories(`${topic}`, { limit: 200 });
      setCategory({
        title: topic,
        data: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // if there is no search result to what user is searching(e.g. long search terms)
  // App will show them results of first word from their search term
  const searchCategory = async (topic) => {
    setSearchCategoryResult({});
    try {
      const result = await gifFetch.search(`${topic}`, {
        sort: 'recent',
        limit: 100,
      });

      let newResult = undefined;
      if (!result.data.length) {
        newResult = await gifFetch.search(
          `${topic.split(' ').slice(0, 1).join(' ')}`,
          {
            sort: 'recent',
            limit: 100,
          }
        );
      }

      setSearchCategoryResult(
        !result.data.length
          ? {
              title: topic.split(' ').slice(0, 1).join(' '),
              data: newResult.data,
            }
          : {
              title: topic,
              data: result.data,
            }
      );
    } catch (error) {
      console.log(error);
    }
  };

  // search term is Giphy's endpoint
  // With that, I can only show similar search terms to what user is searching
  // And fetch data based on those terms
  // So I dont have to fetch 100s of gifs while search is being made
  const searchTerm = async (topic) => {
    try {
      const result = await axios.get(
        `https://api.giphy.com/v1/gifs/search/tags?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${topic}&limit=25&offset=0&rating=G&lang=en`
      );
      setSearch(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const clearInput = () => {
    setInput(``);
    setSearch({});
  };

  // fetchGifs syntax should be like this in order for
  // individual gif Grid component to work properly.
  // Its Giphy's own component
  const fetchGifs = (offset: number) =>
    gifFetch.related(`${gif.id}`, { offset, limit: 10 });

  // I made seperate functions like this to open and close modals
  // because those components perform differently on screen sizes
  const openMenu = () => {
    setMenuDropdown(true);
  };
  const closeMenu = () => {
    setMenuDropdown(false);
  };

  const openAndCloseMenu = () => {
    setMenuDropdown(!menuDropdown);
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
        scrollY,
        inLogin,
        category,
        getCategory,
        searchCategory,
        searchCategoryResult,
        searchTerm,
        search,
        input,
        setInput,
        clearInput,
        changeInLogin,
        fetchGifs,
        siliconValley,
        menuDropdown,
        setMenuDropdown,
        openMenu,
        closeMenu,
        openAndCloseMenu,
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
