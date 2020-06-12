import styled from 'styled-components';
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

export const DeleteModal = styled.div`
  padding: var(--giant) var(--whaat);
  background: var(--dark-gray);
  color: var(--white);
  text-align: center;
  h3 {
    font-family: var(--Raleway);
    font-size: var(--mid);
  }
  p {
    font-family: var(--Merriweather);
    font-size: var(--text) !important;
    span {
      color: var(--light-green);
      font-weight: bold;
      font-size: var(--normal);
    }
  }
  a {
    color: var(--sky-blue);
    margin-left: 3px;
    text-decoration: none;
  }
  div {
    margin-top: var(--big);
  }

  button {
    height: 40px;
    background: none;
    color: var(--white);
    border: none;
    font-family: var(--Merriweather);
    font-size: var(--text);
    font-weight: 600;
    cursor: pointer;
    width: 40%;
    margin: 0;
    outline: none;
    &:focus {
      outline: none;
    }
  }
  button ~ button {
    background: var(--indian-red);
  }

  @media (max-width: 500px) {
    div {
      display: flex;
      flex-direction: column-reverse;
    }
    button {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;
