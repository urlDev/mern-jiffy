import React from 'react';

import { NotificationContainer } from './NotificationComponent.styles';

const NotificationComponent = ({ text, color }) => {
  return (
    <>
      <NotificationContainer style={{ backgroundColor: `${color}` }}>
        <p>{text}</p>
      </NotificationContainer>
    </>
  );
};

export default NotificationComponent;
