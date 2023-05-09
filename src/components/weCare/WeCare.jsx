import React from 'react';

import { WeCareContainer } from './WeCare.styles';
import VictoryGif from '../../assets/V.gif';
import HeartGif from '../../assets/heart.gif';

const WeCare = () => {
  return (
    <WeCareContainer
      href="https://twitter.com/urlDev"
      rel="noopener noreferrer"
      target="_blank"
    >
      <h3>Do you like the app?</h3>
      <img src={VictoryGif} alt="victory gif" />
      <img src={HeartGif} alt="heart gif" />
      <h3>
        <span>Jiffy</span> Cares
      </h3>
    </WeCareContainer>
  );
};

export default WeCare;
