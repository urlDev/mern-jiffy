import React, { useContext } from 'react';

import { GifContext } from '../../context/GifContext';
import { UserContext } from '../../context/UserContext';

import { TrendingContainer } from '../trending/Trending.styles';
import {
  Card,
  CardTitle,
  CardUser,
  CardFavorite,
  CardContainer,
} from '../card/Card.styles';
import { Title } from '../title/Title.styles';

const ProfileFavorites = () => {
  const { favorite, deleteFavorite } = useContext(UserContext);
  const { getGif } = useContext(GifContext);

  return (
    <>
      <Title>
        Favorite <span>GIFs:</span>
      </Title>
      <TrendingContainer>
        {favorite.map((gif) => {
          const { id, slug, images, title, user } = gif.gif[0];
          return (
            <CardContainer key={id}>
              <Card to={`/${slug}`} onClick={() => getGif(gif.gif[0])}>
                <CardUser>
                  <img src={user && user.avatar_url} alt={user} />
                </CardUser>
                <img src={images.downsized.url} alt={title} />
                <CardTitle>{title}</CardTitle>
              </Card>
              <CardFavorite>
                <i
                  onClick={() => deleteFavorite(gif)}
                  className="fas fa-heart"
                ></i>
              </CardFavorite>
            </CardContainer>
          );
        })}
      </TrendingContainer>
    </>
  );
};

export default ProfileFavorites;
