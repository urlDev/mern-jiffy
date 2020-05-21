import React, { useContext } from 'react';

import { GifContext } from '../../context/GifContext';

import { TrendingContainer } from '../trending/Trending.styles';
import { Card, CardTitle, CardUser } from '../card/Card.styles';
import { Title } from '../title/Title.styles';

const Emoji = () => {
  const { emoji } = useContext(GifContext);
  return (
    <>
      <Title>Emojis</Title>
      <TrendingContainer>
        {emoji.length &&
          emoji.map((gif) => {
            return (
              <React.Fragment key={gif.id}>
                <Card href={gif.url}>
                  <CardUser>
                    <img src={gif.user && gif.user.avatar_url} alt={gif.user} />
                  </CardUser>
                  <img src={gif.images.downsized.url} alt={gif.title} />
                  <CardTitle>{gif.title}</CardTitle>
                </Card>
              </React.Fragment>
            );
          })}
      </TrendingContainer>
    </>
  );
};

export default Emoji;
