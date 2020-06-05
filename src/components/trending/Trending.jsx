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
                <Card to={`/${gif.slug}`} onClick={() => getGif(gif)}>
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
