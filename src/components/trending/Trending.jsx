import React, { useContext } from 'react';
import moment from 'moment';

import { GifContext } from '../../context/GifContext';

import { TrendingContainer } from './Trending.styles';
import { Card, CardTitle, CardTime, CardUser } from '../card/Card.styles';
import { Title } from '../title/Title.styles';

const Trending = () => {
  const { trending } = useContext(GifContext);

  return (
    <>
      <Title>Trending</Title>
      <TrendingContainer>
        {trending.length &&
          trending.map((gif) => {
            return (
              <React.Fragment key={gif.id}>
                <Card href={gif.url}>
                  <CardUser>
                    <img src={gif.user && gif.user.avatar_url} alt={gif.user} />
                  </CardUser>
                  <img src={gif.images.downsized.url} alt={gif.title} />
                  <CardTitle>{gif.title}</CardTitle>
                  <CardTime>
                    {moment(gif.trending_datetime, 'YYYYMMDD').fromNow()}
                  </CardTime>
                </Card>
              </React.Fragment>
            );
          })}
      </TrendingContainer>
    </>
  );
};

export default Trending;
