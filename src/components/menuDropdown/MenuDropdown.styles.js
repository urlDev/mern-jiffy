import styled from 'styled-components';

export const MenuDropdownContainer = styled.div`
  max-width: 1060px;
  width: 100%;
  padding: 30px 50px;
  background: linear-gradient(135deg, var(--blue-violet) 0%, var(--pink) 100%);
  position: absolute;
  top: 62px;
  z-index: 8;
  display: flex;
  justify-content: space-between;
  opacity: 0;
  animation: fade 0.5s ease-in forwards;
  color: var(--white);
  h1 {
    padding: 0;
    margin: 0;
    font-family: var(--Merriweather);
  }
  hr {
    color: var(--white);
    border-width: 0.5px;
  }
  ul {
    padding: 0;
    margin: 20px 0 0 0;
    width: 100%;
    li {
      cursor: pointer;
      list-style-type: none;

      margin-bottom: 10px;
      a {
        text-decoration: none;
        color: var(--white);
        font-family: var(--Raleway);
        font-size: var(--normal);
        font-weight: 600;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1080px) {
    position: fixed;
    z-index: 8;
    width: calc(100% - 10px);
    top: 72px;
    height: 600px;
    flex-direction: column;
    padding: 20px 30px;
    animation: rotate 0.2s linear forwards, fade 0.5s linear forwards;
    div {
      width: 100% !important;
      height: 100%;
    }

    div ~ div {
      margin-top: 30px;
    }
  }

  @media (max-width: 767.9px) {
    position: fixed;
    z-index: 8;
    top: 61px;
    height: 100%;
    width: calc(100% - 10px);
    flex-direction: column;
    padding: 20px 30px;
    animation: rotate 0.2s linear forwards, fade 0.5s linear forwards;
    div {
      width: 100% !important;
      height: 100%;
    }

    div ~ div {
      margin-top: 30px;
    }
  }
`;

export const Black = styled.div`
  position: absolute;
  top: 38px;
  height: 25px;
  width: 100%;
  z-index: 7;
  @media (max-width: 1080px) {
    display: none;
  }
`;

export const Dropdown = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  // border: 1px solid red;
  z-index: 7;
`;
