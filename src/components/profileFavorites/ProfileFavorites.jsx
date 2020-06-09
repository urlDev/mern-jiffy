import React, { useContext } from 'react';
import moment from 'moment';
import LazyLoad from 'react-lazyload';

import { GifContext } from '../../context/GifContext';
import { UserContext } from '../../context/UserContext';

import Placeholder from '../placeholder/Placeholder';

import { TrendingContainer } from '../trending/Trending.styles';
import {
  Card,
  CardTitle,
  CardUser,
  CardFavorite,
  CardContainer,
  CardTime,
} from '../card/Card.styles';
import { Title } from '../title/Title.styles';

const ProfileFavorites = () => {
  const { favorite, deleteFavorite } = useContext(UserContext);
  const { getGif } = useContext(GifContext);

  return (
    <>
      {favorite.length ? (
        <Title>
          Favorite <span>GIFs:</span>
        </Title>
      ) : (
        <Title>
          There are no <span>GIFs </span> here
        </Title>
      )}
      <TrendingContainer>
        {favorite.map((gif) => {
          const { id, slug, images, title, user } = gif.gif[0];
          return (
            <CardContainer key={id}>
              <Card
                to={
                  // because I made the router check for only words for certain slugs
                  // if gifs' slug has only word, router doesn't show the gif component
                  // so if gif has a one word slug, I am changing link with title
                  slug.split('-').length === 1
                    ? `/${title.toLowerCase().split(' ').join('-')}-${slug}`
                    : `/${slug}`
                }
                onClick={() => getGif(gif.gif[0])}
              >
                <CardUser>
                  <img src={user && user.avatar_url} alt={user} />
                </CardUser>
                <LazyLoad
                  height={300}
                  offset={100}
                  placeholder={<Placeholder />}
                >
                  <img src={images.original.webp} alt={title} />
                </LazyLoad>

                <CardTitle>{title}</CardTitle>
                <CardTime>{moment(gif.added).fromNow()}</CardTime>
              </Card>
              <CardFavorite onClick={() => deleteFavorite(gif)} />
            </CardContainer>
          );
        })}
      </TrendingContainer>
    </>
  );
};

export default ProfileFavorites;
