import React, { useContext } from 'react';

import { GifContext } from '../../context/GifContext';

import { TrendingContainer } from '../trending/Trending.styles';
import { Card, CardTitle, CardUser, CardContainer } from '../card/Card.styles';
import { Title } from '../title/Title.styles';

const Emoji = () => {
  const { emoji, getGif } = useContext(GifContext);
  return (
    <>
      <Title>Emojis</Title>
      <TrendingContainer>
        {emoji.length &&
          emoji.map((gif) => {
            return (
              <CardContainer key={gif.id}>
                <Card to={`/${gif.slug}`} onClick={() => getGif(gif)}>
                  <CardUser>
                    <img src={gif.user && gif.user.avatar_url} alt={gif.user} />
                  </CardUser>
                  <img src={gif.images.downsized.url} alt={gif.title} />
                  <CardTitle>{gif.title}</CardTitle>
                </Card>
              </CardContainer>
            );
          })}
      </TrendingContainer>
    </>
  );
};

export default Emoji;
