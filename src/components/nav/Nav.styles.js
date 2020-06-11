import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  // justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 15px;
  position: relative;
  z-index: 4;
  ul {
    width: 65%;
    height: 36px;
    padding: 0;
    display: flex;
    list-style-type: none;
    transform: translateZ(0px);
    margin: 0;
    animation: gradient 3s ease infinite;
    background: linear-gradient(
        to right,
        rgb(0, 204, 255),
        rgb(153, 51, 255) 31%,
        rgb(230, 70, 182) 52%,
        rgb(255, 249, 170) 77%,
        rgb(0, 255, 153),
        rgb(0, 204, 255)
      )
      0% 50% / 200% 50%;
    background-position: 0% 50%;
    li {
      cursor: pointer;
      position: relative;
      display: flex;
      -webkit-box-flex: 1;
      flex-grow: 1;
      -webkit-box-align: center;
      align-items: center;
      border-right: 4px solid var(--smoke-black);
      &::before {
        content: '';
        position: absolute;
        background-color: var(--smoke-black);
        opacity: 1;
        top: 0px;
        bottom: 4px;
        z-index: 1;
        left: -1px;
        right: -1px;
        transition: all 0.5s ease-in;
      }
      &:hover:before {
        opacity: 0.4;
      }
      a {
        font-family: var(--Merriweather);
        width: 100%;
        text-decoration: none;
        text-align: center;
        font-size: var(--normal);
        font-weight: 600;
        color: var(--white);
        height: 100%;
        position: relative;
        z-index: 2;
        -webkit-font-smoothing: antialiased;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  font-family: var(--Raleway);
  font-weight: 900;
  text-decoration: none;
  color: var(--white);
  font-size: var(--giant);
  position: relative;
  img {
    width: var(--giant);
  }
  span {
    font-family: var(--Merriweather);
    font-weight: 400;
  }
  margin-right: 20px;
  @media (max-width: 1080px) {
    margin-right: 0;
  }
  @media (max-width: 500px) {
    font-size: var(--big);
    img {
      width: var(--big);
    }
  }
`;

export const Menu = styled.a``;

export const ResponsiveMenu = styled.a`
  color: var(--white);
  position: relative;
  display: none;
  margin-left: auto;
  width: var(--whaat);
  height: 36px;
  animation: gradient 10s ease infinite;
  background: linear-gradient(
      to right,
      rgb(0, 204, 255),
      rgb(153, 51, 255) 31%,
      rgb(230, 70, 182) 52%,
      rgb(255, 249, 170) 77%,
      rgb(0, 255, 153),
      rgb(0, 204, 255)
    )
    0% 50% / 1000% 50%;
  background-position: 0% 50%;
  &::before {
    content: '';
    position: absolute;
    background-color: var(--smoke-black);
    opacity: 1;
    top: 0px;
    bottom: 4px;
    z-index: 1;
    left: -1px;
    right: -1px;
    transition: all 0.5s ease-in;
  }
  &:hover:before {
    opacity: 0.4;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: var(--normal);
    font-weight: bold;
    z-index: 2;
  }
  @media (max-width: 1080px) {
    display: flex;
  }
`;

export const Logo = styled.div`
  background: url(${require(`../../assets/neonHeartsFull.svg`)}) left center;
  background-size: cover;
  display: inline-block;
  width: 40px;
  height: 30px;
  animation: play 4s steps(18) infinite;
  @media (max-width: 500px) {
    width: var(--big);
    height: 20px;
  }
`;

export const LoginRegister = styled(Link)`
  max-width: 190px;
  width: 100%;
  height: 36px;
  margin-left: auto;
  display: flex;
  position: relative;
  text-decoration: none;
  i {
    color: var(--white);
    margin: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h5 {
    padding: 0;
    margin: 0;
    font-family: var(--Merriweather);
    color: var(--white);
  }
  &:active,
  &:focus {
    text-decoration: none;
  }
  @media (max-width: 1080px) {
    margin-left: var(--normal);
    // pointer-events: none;
  }

  @media (max-width: 500px) {
    max-width: 80px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      // object-position: top center;
    }
  }
`;
