import React from 'react';

import { WeCareContainer } from './WeCare.styles';

const WeCare = () => {
  return (
    <WeCareContainer>
      <h3>Do you like the app?</h3>
      <img src={require('../../assets/V.gif')} alt="" />
      <img src={require('../../assets/heart.gif')} alt="" />
      <h3>
        <span>Jiffy / urlDev</span> Cares
      </h3>
    </WeCareContainer>
  );
};

export default WeCare;
