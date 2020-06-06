import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Results = styled(Link)`
  padding: 0 20px;
  text-decoration: none;
  font-family: var(--Merriweather);
  font-size: var(--normal);
  font-weight: 400;
  color: var(--smoke-black);
  opacity: 0.8;
  margin: 0;
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
`;

export const Modal = styled.div`
  position: absolute;
  top: 0em;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  //   background: rgba(0, 0, 0, 0.9);
  z-index: 6;
  //   margin-left: -2em;
  display: flex;
  justify-content: center;
  margin-top: 128px;

  @media (max-width: 500px) {
    margin-top: 116px;
  }

  @media (max-width: 1080px) {
    position: fixed !important;
    z-index: 7 !important;
  }
`;

export const SearchModalContainer = styled.div`
  position: absolute;
  z-index: 6;
  max-width: 1060px;
  width: calc(100% - 10px);
  height: 300px;
  overflow-y: scroll;
  background: var(--white);
  color: var(--smoke-black);
  hr {
    margin: 0;
    color: var(--smoke-black);
    opacity: 0.3;
  }
`;
