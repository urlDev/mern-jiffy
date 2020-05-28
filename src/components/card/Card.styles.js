import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled(Link)`
  position: relative;
  text-decoration: none;
  overflow: hidden;
  width: 100%;
  height: 300px;
  &:hover {
    &:after {
      content: ' ';
      position: absolute;
      left: 0;
      right: 0;
      height: 100px;
      bottom: 0px;
      opacity: 0.8;
      background: linear-gradient(
        0deg,
        rgba(215, 82, 160, 1) 0%,
        rgba(215, 82, 160, 0.5) 50%,
        rgba(215, 82, 160, 0.4) 60%,
        rgba(215, 82, 160, 0.3) 70%,
        rgba(215, 82, 160, 0.2) 80%,
        rgba(215, 82, 160, 0.1) 90%,
        rgba(215, 82, 160, 0.05) 100%
      );
      z-index: 1;
    }
    &:nth-child(2) {
      &:after {
        content: ' ';
        position: absolute;
        left: 0;
        right: 0;
        height: 100px;
        bottom: 0px;
        opacity: 0.8;

        background: linear-gradient(
          0deg,
          rgba(126, 45, 208, 1) 0%,
          rgba(126, 45, 208, 0.5) 50%,
          rgba(126, 45, 208, 0.4) 60%,
          rgba(126, 45, 208, 0.3) 70%,
          rgba(126, 45, 208, 0.2) 80%,
          rgba(126, 45, 208, 0.1) 90%,
          rgba(126, 45, 208, 0.05) 100%
        );
        z-index: 1;
      }
    }
    &:nth-child(3) {
      &:after {
        content: ' ';
        position: absolute;
        left: 0;
        right: 0;
        height: 100px;
        bottom: 0px;
        opacity: 0.8;

        background: linear-gradient(
          0deg,
          rgba(208, 86, 86, 1) 0%,
          rgba(208, 86, 86, 0.5) 50%,
          rgba(208, 86, 86, 0.4) 60%,
          rgba(208, 86, 86, 0.3) 70%,
          rgba(208, 86, 86, 0.2) 80%,
          rgba(208, 86, 86, 0.1) 90%,
          rgba(208, 86, 86, 0.05) 100%
        );
        z-index: 1;
      }
    }
    &:nth-child(5) {
      &:after {
        content: ' ';
        position: absolute;
        left: 0;
        right: 0;
        height: 100px;
        bottom: 0px;
        opacity: 0.8;

        background: linear-gradient(
          0deg,
          rgba(94, 204, 228, 1) 0%,
          rgba(94, 204, 228, 0.5) 50%,
          rgba(94, 204, 228, 0.4) 60%,
          rgba(94, 204, 228, 0.3) 70%,
          rgba(94, 204, 228, 0.2) 80%,
          rgba(94, 204, 228, 0.1) 90%,
          rgba(94, 204, 228, 0.05) 100%
        );
        z-index: 1;
      }
    }
    &:nth-child(4) {
      &:after {
        content: ' ';
        position: absolute;
        left: 0;
        right: 0;
        height: 100px;
        bottom: 0px;
        opacity: 0.8;

        background: linear-gradient(
          0deg,
          rgba(66, 151, 8, 1) 0%,
          rgba(66, 151, 8, 0.5) 50%,
          rgba(66, 151, 8, 0.4) 60%,
          rgba(66, 151, 8, 0.3) 70%,
          rgba(66, 151, 8, 0.2) 80%,
          rgba(66, 151, 8, 0.1) 90%,
          rgba(66, 151, 8, 0.05) 100%
        );
        z-index: 1;
      }
    }
  }
  img {
    width: 100%;
    height: 300px;
    opacity: 0.8;
    object-fit: cover;
  }
  &:nth-child(2) {
    -webkit-box-shadow: 0px 26px 0px -14px rgba(126, 45, 208, 1),
      0px 26px 0px -14px rgba(126, 45, 208, 0.7),
      0px 52px 0px -32px rgba(126, 45, 208, 5);
    -moz-box-shadow: 0px 26px 0px -14px rgba(126, 45, 208, 1),
      0px 26px 0px -14px rgba(126, 45, 208, 0.7),
      0px 52px 0px -32px rgba(126, 45, 208, 0.5);
    box-shadow: 0px 5px 0px 0px rgba(126, 45, 208, 1),
      0px 26px 0px -14px rgba(126, 45, 208, 0.7),
      0px 52px 0px -32px rgba(126, 45, 208, 0.5);
  }
  &:nth-child(3) {
    -webkit-box-shadow: 0px 26px 0px -14px rgba(208, 86, 86, 1),
      0px 26px 0px -14px rgba(208, 86, 86, 0.7),
      0px 52px 0px -32px rgba(208, 86, 86, 0.5);
    -moz-box-shadow: 0px 26px 0px -14px rgba(208, 86, 86, 1),
      0px 26px 0px -14px rgba(208, 86, 86, 0.7),
      0px 52px 0px -32px rgba(208, 86, 86, 0.5);
    box-shadow: 0px 5px 0px 0px rgba(208, 86, 86, 1),
      0px 26px 0px -14px rgba(208, 86, 86, 0.7),
      0px 52px 0px -32px rgba(208, 86, 86, 0.5);
  }
  &:nth-child(4) {
    width: 100%;
    -webkit-box-shadow: 0px 26px 0px -14px rgba(66, 151, 8, 1),
      0px 26px 0px -14px rgba(66, 151, 8, 0.7),
      0px 52px 0px -32px rgba(66, 151, 8, 0.5);
    -moz-box-shadow: 0px 26px 0px -14px rgba(66, 151, 8, 1),
      0px 26px 0px -14px rgba(66, 151, 8, 0.7),
      0px 52px 0px -32px rgba(66, 151, 8, 0.5);
    box-shadow: 0px 5px 0px 0px rgba(66, 151, 8, 1),
      0px 26px 0px -14px rgba(66, 151, 8, 0.7),
      0px 52px 0px -32px rgba(66, 151, 8, 0.5);
    img {
      width: 100%;
    }
  }
  &:nth-child(5) {
    -webkit-box-shadow: 0px 26px 0px -14px rgba(94, 204, 228, 1),
      0px 26px 0px -14px rgba(94, 204, 228, 0.7),
      0px 52px 0px -32px rgba(94, 204, 228, 0.5);
    -moz-box-shadow: 0px 26px 0px -14px rgba(94, 204, 228, 1),
      0px 26px 0px -14px rgba(94, 204, 228, 0.7),
      0px 52px 0px -32px rgba(94, 204, 228, 0.5);
    box-shadow: 0px 5px 0px 0px rgba(94, 204, 228, 1),
      0px 26px 0px -14px rgba(94, 204, 228, 0.7),
      0px 52px 0px -32px rgba(94, 204, 228, 0.5);
  }

  &:first-child {
    grid-column: span 2;
    -webkit-box-shadow: 0px 26px 0px -14px rgba(215, 82, 160, 1),
      0px 26px 0px -14px rgba(215, 82, 160, 0.7),
      0px 52px 0px -32px rgba(215, 82, 160, 0.5);
    -moz-box-shadow: 0px 26px 0px -14px rgba(215, 82, 160, 1),
      0px 26px 0px -14px rgba(215, 82, 160, 0.7),
      0px 52px 0px -32px rgba(215, 82, 160, 0.5);
    box-shadow: 0px 5px 0px 0px rgba(215, 82, 160, 1),
      0px 26px 0px -14px rgba(215, 82, 160, 0.7),
      0px 52px 0px -32px rgba(215, 82, 160, 0.5);
    img {
      width: 100%;
    }
    @media (max-width: 600px) {
      grid-column: 1/1;
    }
  }
  &:hover {
    img {
      transition: all 0.5s linear;
      transform: scale(1.2);
    }
  }
`;

export const CardTitle = styled.h3`
  margin-left: 10px;
  width: 80%;
  font-family: var(--Merriweather);
  font-weight: 600;
  color: var(--white);
  position: absolute;
  bottom: 10%;
  text-transform: capitalize;
  z-index: 2;
`;

export const CardTime = styled.h5`
  position: absolute;
  bottom: 1px;
  color: var(--white);
  font-family: var(--Merriweather);
  font-weight: 600;
  margin-left: 10px;
  opacity: 0.5;
  z-index: 2;
`;

export const CardUser = styled.div`
  position: absolute;
  z-index: 1;
  img {
    width: 30px !important;
    height: 100%;
    margin: 10px 0 0 10px;
  }
`;
