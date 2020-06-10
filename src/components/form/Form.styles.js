import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  input {
    margin-bottom: 20px;
    width: 100%;
    height: 40px;
    padding-left: 10px;
    border: none;
    font-family: var(--Merriweather);
    &:active,
    &:focus {
      outline: 2px solid var(--blue-violet);
    }
  }

  button {
    height: 40px;
    background: var(--dark-gray);
    color: var(--white);
    border: none;
    font-family: var(--Merriweather);
    font-size: var(--text);
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.5s ease-in;
    &:hover {
      background-color: var(--blue-violet);
    }
    &:active,
    &:focus {
      text-decoration: none;
      background-color: var(--blue-violet);
      outline: none;
    }
  }
`;

export const DirectLink = styled.h5`
  color: var(--white);
  font-family: var(--Merriweather);
  margin-top: 10px;
  display: flex;
  justify-content: center;
  a {
    color: var(--sky-blue);
    margin-left: 3px;
    text-decoration: none;
  }
`;
