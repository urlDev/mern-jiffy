import '../../index';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MenuDropdownContainer } from '../menuDropdown/MenuDropdown.styles';

export const NavContainer = styled.nav`
  display: flex;
  // justify-content: space-between;
  margin-top: 10px;
  ul {
    width: 500px;
    padding: 0;
    display: flex;
    list-style-type: none;
    transform: translateZ(0px);
    position: relative;
    left: 30px;
    margin: 0px;
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
        opacity: 0.6;
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
  img {
    width: var(--giant);
  }
`;

export const Menu = styled.a`
  &:hover {
    display: ${(props) => (props.hover ? 'block' : 'none')};
  }
`;
// export const Logo = styled.div`
//   background: url('../../assets/neonHearts.svg') left center;
//   background-size: cover;
//   display: inline-block;
//   width: var(--giant);
//   animation: play 2s steps(11) infinite;
// `;
