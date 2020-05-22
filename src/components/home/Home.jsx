import React from 'react';

import WeCare from '../weCare/WeCare';
import Trending from '../trending/Trending';
import Emoji from '../emoji/Emoji';
import SiliconValley from '../siliconValley/SiliconValley';

const Home = () => {
  return (
    <>
      <WeCare />
      <Trending />
      <Emoji />
      <SiliconValley />
    </>
  );
};

export default Home;
