import React, { useContext } from 'react';

import { GifContext } from '../../context/GifContext';

import { TrendingContainer } from '../trending/Trending.styles';
import { Card, CardTitle, CardUser } from '../card/Card.styles';
import { Title } from '../title/Title.styles';

const SiliconValley = () => {
  const { siliconValley, getGif } = useContext(GifContext);
  return (
    <>
      <Title>Silicon Valley</Title>
      <TrendingContainer>
        {siliconValley.length &&
          siliconValley.map((gif) => {
            return (
              <React.Fragment key={gif.id}>
                <Card to={`/${gif.slug}`} onClick={() => getGif(gif)}>
                  <CardUser href={gif.user && gif.user.profile_url}>
                    <img src={gif.user && gif.user.avatar_url} alt="" />
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

export default SiliconValley;
