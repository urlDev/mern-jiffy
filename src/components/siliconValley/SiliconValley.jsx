import React, { useContext } from 'react';

import { GifContext } from '../../context/GifContext';

import DefaultHomeGifComponent from '../defaultHomeGifComponent/DefaultHomeGifComponent';

const SiliconValley = () => {
  const { siliconValley } = useContext(GifContext);
  return (
    <>
      <DefaultHomeGifComponent
        title={`Silicon Valley`}
        gifType={siliconValley}
        visible={false}
      />
    </>
  );
};

export default SiliconValley;
