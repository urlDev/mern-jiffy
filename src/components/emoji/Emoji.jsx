import React, { useContext } from 'react';

import { GifContext } from '../../context/GifContext';

import DefaultHomeGifComponent from '../defaultHomeGifComponent/DefaultHomeGifComponent';

const Emoji = () => {
  const { emoji } = useContext(GifContext);
  return (
    <>
      <DefaultHomeGifComponent
        title={`Emojis`}
        gifType={emoji}
        visible={false}
      />
    </>
  );
};

export default Emoji;
