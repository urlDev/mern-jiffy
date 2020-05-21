import styled from 'styled-components';

export const SearchContainer = styled.form`
  display: flex;
  input {
    height: var(--whaat);
    width: calc(100% - var(--whaat));
    border: none;
    padding: 20px;
    font-family: var(--Merriweather);
    font-size: var(--normal);
    &:focus,
    &:active {
      outline: none;
    }
    ::placeholder {
      color: var(--smoke-black);
      opacity: 0.5;
    }
  }
  button {
    height: var(--whaat);
    width: var(--whaat);
    border: none;
    background: linear-gradient(
      135deg,
      var(--blue-violet) 0%,
      var(--pink) 100%
    );
    color: var(--white);
  }
`;
