import React, { useContext } from 'react';
import LazyLoad from 'react-lazyload';

import { GifContext } from '../../context/GifContext';

import Placeholder from '../placeholder/Placeholder';

import { TrendingContainer } from '../trending/Trending.styles';
import { Card, CardTitle, CardUser, CardContainer } from '../card/Card.styles';
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
              <CardContainer key={gif.id}>
                <Card to={`/${gif.slug}`} onClick={() => getGif(gif)}>
                  <CardUser href={gif.user && gif.user.profile_url}>
                    <img src={gif.user && gif.user.avatar_url} alt="" />
                  </CardUser>
                  <LazyLoad
                    height={300}
                    offset={100}
                    placeholder={<Placeholder />}
                  >
                    <img src={gif.images.original.webp} alt={gif.title} />
                  </LazyLoad>
                  <CardTitle>{gif.title}</CardTitle>
                </Card>
              </CardContainer>
            );
          })}
      </TrendingContainer>
    </>
  );
};

export default SiliconValley;
