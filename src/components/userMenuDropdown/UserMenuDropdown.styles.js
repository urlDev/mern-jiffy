import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const UserDropdownContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50px;
  z-index: 8;
  height: 100px;
  width: 190px;
  padding: 0;
`;

export const UserDropdownBlack = styled.div`
  position: absolute;
  right: 0;
  top: 40px;
  width: 190px;
  height: 10px;
`;

export const LinkContainer = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  font-family: var(--Merriweather);
  font-weight: bold;
  font-size: var(--text);
  color: var(--white);
  text-decoration: none;

  ${UserDropdownContainer} > &:nth-child(odd) {
    background: #414141;
  }

  ${UserDropdownContainer} > &:nth-child(even) {
    background: #515151;
  }
`;
