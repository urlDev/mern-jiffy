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
      outline: none;
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
