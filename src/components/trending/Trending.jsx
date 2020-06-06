import React, { useContext } from 'react';
import moment from 'moment';

import { GifContext } from '../../context/GifContext';

import { TrendingContainer } from './Trending.styles';
import {
  Card,
  CardTitle,
  CardTime,
  CardUser,
  CardContainer,
} from '../card/Card.styles';
import { Title } from '../title/Title.styles';

const Trending = () => {
  const { trending, getGif } = useContext(GifContext);

  return (
    <>
      <Title>Trending</Title>
      <TrendingContainer>
        {trending.length &&
          trending.map((gif) => {
            return (
              <CardContainer key={gif.id}>
                <Card
                  to={
                    // because I made the router check for only words for certain slugs
                    // if gifs' slug has only word, router doesn't show the gif component
                    // so if gif has a one word slug, I am changing link with title
                    gif.slug.split('-').length === 1
                      ? `/${gif.title.toLowerCase().split(' ').join('-')}-${
                          gif.slug
                        }`
                      : `/${gif.slug}`
                  }
                  onClick={() => getGif(gif)}
                >
                  <CardUser>
                    <img src={gif.user && gif.user.avatar_url} alt={gif.user} />
                  </CardUser>
                  <img src={gif.images.downsized.url} alt={gif.title} />
                  <CardTitle>{gif.title}</CardTitle>
                  <CardTime>
                    {moment(gif.trending_datetime, 'YYYYMMDD').fromNow()}
                  </CardTime>
                </Card>
              </CardContainer>
            );
          })}
      </TrendingContainer>
    </>
  );
};

export default Trending;
