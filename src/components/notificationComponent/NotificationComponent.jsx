import React from 'react';

import { NotificationContainer } from './NotificationComponent.styles';

const NotificationComponent = ({ text, success }) => {
  return (
    <>
      <NotificationContainer
        style={
          success
            ? { backgroundColor: 'var(--light-green)' }
            : { backgroundColor: 'var(--indian-red)' }
        }
      >
        <p>{text}</p>
      </NotificationContainer>
    </>
  );
};

export default NotificationComponent;
