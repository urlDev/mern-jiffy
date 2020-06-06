import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const UserDropdownContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50px;
  // z-index: 20;
  height: 100px;
  width: 190px;
  padding: 0;
  opacity: 0;
  animation: fade 0.3s ease-in forwards;
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
    background: var(--dark-gray);
    &:hover {
      background: var(--blue-violet);
    }
  }

  ${UserDropdownContainer} > &:nth-child(even) {
    background: var(--light-gray);
    &:hover {
      background: var(--blue-violet);
    }
  }
`;
