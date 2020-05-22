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

import { GifContext } from '../../context/GifContext';

import {
  GifContainer,
  UserContainer,
  IndividualGifContainer,
  InnerContainer,
  Social,
  SocialIcons,
} from './Gif.styles';

const Gif = () => {
  const { gif, fetchGifs } = useContext(GifContext);
  console.log(gif);

  return (
    <GifContainer>
      {gif.user && (
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
                  <img
                    src={require('../../assets/correct.svg')}
                    alt="Verified"
                    title="Verified"
                  />
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
      )}
      <IndividualGifContainer>
        <p>{gif.title}</p>
        <InnerContainer>
          <img src={gif.images && gif.images.original.webp} alt={gif.title} />
          <Social>
            <h5>
              <i className="far fa-heart"></i>Favorite
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
                media={gif.url}
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
        <h1>
          Related <span>GIFS</span>
        </h1>
        <Grid fetchGifs={fetchGifs} width={710} columns={3} gutter={6} />
      </IndividualGifContainer>
    </GifContainer>
  );
};

export default Gif;
