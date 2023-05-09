import React, { useContext } from 'react';
import { Grid } from '@giphy/react-components';
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  RedditShareButton,
  TumblrShareButton,
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  TumblrIcon,
  RedditIcon,
  PinterestIcon,
} from 'react-share';

import { UserContext } from '../../context/UserContext';
import { GifContext } from '../../context/GifContext';

import {
  GifContainer,
  UserContainer,
  IndividualGifContainer,
  InnerContainer,
  Social,
  SocialIcons,
  GifGrid,
} from './Gif.styles';

import VerifiedLogo from '../../assets/correct.svg';
import UserNotfound from '../../assets/notFound.gif';

const Gif = () => {
  const { gif, fetchGifs, width } = useContext(GifContext);
  const { favorite, addDeleteFavorite } = useContext(UserContext);

  return (
    <>
      <GifContainer>
        {gif.user ? (
          <UserContainer>
            <div
              style={{
                display: 'flex',
                marginBottom: '20px',
              }}
            >
              <img src={gif.user.avatar_url} alt={gif.user.username} />
              <h4>
                {gif.user.display_name}
                <br />
                <span>
                  @{gif.user.username}
                  {gif.user.is_verified ? (
                    <img src={VerifiedLogo} alt="Verified" title="Verified" />
                  ) : null}
                </span>
              </h4>
            </div>

            <a
              href={gif.user.profile_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out <span>{gif.user.username}</span>'s profile!
            </a>
          </UserContainer>
        ) : (
          <UserContainer>
            <div
              style={{
                display: 'flex',
                marginBottom: '20px',
              }}
            >
              <img src={UserNotfound} alt="user not found gif" />
              <h4>
                Could not find <br /> <span>@user</span>
              </h4>
            </div>
          </UserContainer>
        )}
        <IndividualGifContainer>
          <p>{gif.title}</p>
          <InnerContainer>
            <picture>
              <source
                srcSet={gif.images && gif.images.original.webp}
                type="image/webp"
              />

              <img
                src={gif.images && gif.images.original.url}
                alt={gif.title ? gif.title : 'gif'}
              />
            </picture>
            <Social>
              <h5 onClick={() => addDeleteFavorite(gif)}>
                <span
                  className={
                    favorite.some(
                      (addedGif) =>
                        addedGif.gif && addedGif.gif[0].id === gif.id
                    )
                      ? 'added'
                      : 'add'
                  }
                ></span>
                Favorite
              </h5>
              <p style={{ marginTop: '50px' }}>Share it!</p>
              <SocialIcons>
                <FacebookShareButton
                  url={gif.url}
                  quote="Check out this awesome gif!"
                >
                  <FacebookIcon size={35} />
                </FacebookShareButton>
                <TwitterShareButton
                  url={gif.url}
                  title="Check out this awesome gif!"
                >
                  <TwitterIcon size={35} />
                </TwitterShareButton>
                <TumblrShareButton
                  url={gif.url}
                  title="Check out this awesome gif!"
                >
                  <TumblrIcon size={35} />
                </TumblrShareButton>
                <PinterestShareButton
                  url={gif.url}
                  media={gif.images && gif.images.original.webp}
                  description="Check out this awesome gif!"
                >
                  <PinterestIcon size={35} />
                </PinterestShareButton>
                <RedditShareButton
                  url={gif.url}
                  title="Check out this awesome gif!"
                >
                  <RedditIcon size={35} />
                </RedditShareButton>
              </SocialIcons>
            </Social>
          </InnerContainer>
        </IndividualGifContainer>
      </GifContainer>
      <GifGrid>
        <h1>
          Related <span>GIFs</span>
        </h1>
        <Grid
          fetchGifs={fetchGifs}
          width={width < 1080 ? width - 10 : 756}
          columns={width < 821 && width > 521 ? 2 : width < 521 ? 1 : 3}
          gutter={10}
        />
      </GifGrid>
    </>
  );
};

export default Gif;
