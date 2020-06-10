import React, { useContext } from 'react';

import { GifContext } from '../../context/GifContext';

import DefaultHomeGifComponent from '../defaultHomeGifComponent/DefaultHomeGifComponent';

const Trending = () => {
  const { trending } = useContext(GifContext);

  return (
    <>
      <DefaultHomeGifComponent
        title={`Trending`}
        gifType={trending}
        visible={true}
      />
    </>
  );
};

export default Trending;
