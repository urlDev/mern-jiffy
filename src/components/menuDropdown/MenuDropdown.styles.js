import styled from 'styled-components';

export const MenuDropdownContainer = styled.div`
  max-width: 1040px;
  width: calc(100% - 30.5px);
  padding: 30px 50px;
  background: linear-gradient(135deg, var(--blue-violet) 0%, var(--pink) 100%);
  position: absolute;
  z-index: 3;
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
`;

export const Black = styled.div`
  height: 15px;
  width: 100%;
  background: var(--smoke-black);
`;
