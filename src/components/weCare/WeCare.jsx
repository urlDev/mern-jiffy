import React from 'react';

import { WeCareContainer } from './WeCare.styles';

const WeCare = () => {
  return (
    <WeCareContainer
      href="https://twitter.com/urlDev"
      rel="noopener noreferrer"
      target="_blank"
    >
      <h3>Do you like the app?</h3>
      <img src={require('../../assets/V.gif')} alt="" />
      <img src={require('../../assets/heart.gif')} alt="" />
      <h3>
        <span>Jiffy</span> Cares
      </h3>
    </WeCareContainer>
  );
};

export default WeCare;
