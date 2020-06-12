import styled from '@emotion/styled/macro';

export const SearchContainer = styled.form`
  display: flex;
  position: relative;
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
    cursor: pointer;
    height: var(--whaat);
    width: var(--whaat);
    border: none;
    background: linear-gradient(
      -45deg,
      var(--blue-violet) 0%,
      var(--pink) 100%
    );
    background-size: 300% 300%;
    animation: gradient 3s ease infinite reverse;
    color: var(--white);
  }
`;
