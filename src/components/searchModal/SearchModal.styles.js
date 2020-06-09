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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 6;
  display: flex;
  justify-content: center;
  @media (max-width: 1080px) {
    position: fixed !important;
    z-index: 7 !important;
  }
`;

export const SearchModalContainer = styled.div`
  position: absolute;
  z-index: 6;
  max-width: 1060px;
  margin-top: 124px;
  width: 100%;
  height: 300px;
  overflow-y: scroll;
  background: var(--white);
  color: var(--smoke-black);
  hr {
    margin: 0;
    color: var(--smoke-black);
    opacity: 0.3;
  }
  @media (max-width: 1080px) {
    margin-top: 127px !important;
    width: calc(100% - 7.5px);
  }
`;
