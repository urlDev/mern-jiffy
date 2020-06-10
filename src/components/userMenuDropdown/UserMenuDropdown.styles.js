import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const UserModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
`;

export const UserDropdownContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50px;
  height: 100px;
  width: 190px;
  padding: 0;
  opacity: 0;
  animation: fade 0.3s ease-in forwards;
  @media (max-width: 500px) {
    width: calc(100% - 10px);
    z-index: 10;
    right: 5px;
    position: fixed;
  }
  @media (min-width: 500.1px) and (max-width: 1080px) {
    position: fixed;
    right: 5px;
    top: 57px;
    z-index: 10;
  }
`;

export const UserDropdownBlack = styled.div`
  position: absolute;
  right: 0;
  top: 40px;
  width: 190px;
  height: 10px;
  z-index: 5;
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
