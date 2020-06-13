import React, { useContext } from 'react';

import { UserContext } from '../../context/UserContext';

const Picture = () => {
  const { image } = useContext(UserContext);
  return (
    <>
      {Object.entries(image).length && (
        <picture>
          <source
            srcSet={`data:image/webp;base64,${image.webp}`}
            type="image/webp"
          />
          <source
            srcSet={`data:image/png;base64,${image.png}`}
            type="image/png"
          />
          <img src={`data:image/png;base64,${image.png}`} alt="avatar" />
        </picture>
      )}
    </>
  );
};

export default Picture;
