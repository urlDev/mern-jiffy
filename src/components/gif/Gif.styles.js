import styled from 'styled-components';

export const GifContainer = styled.div`
  color: var(--white);
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  h1 {
    font-family: var(--Merriweather);
    font-size: var(--mid);
    margin-top: 40px;
    span {
      color: var(--light-green);
    }
  }
`;

export const UserContainer = styled.div`
  width: 300px;
  img {
    width: var(--whaat);
    margin-right: 10px;
  }
  h4 {
    font-family: var(--Merriweather);
    font-size: var(--text);
    font-weight: 800;
    width: 50%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  span {
    opacity: 0.7;
    font-weight: 400;
    font-size: var(--text);
    img {
      margin-left: 5px;
      position: relative;
      top: 3px;
      width: 15px;
    }
  }

  a {
    text-decoration: none;
    font-family: var(--Merriweather);
    font-size: var(--text);
    color: var(--white);
    opacity: 0.8;
    span {
      color: var(--light-green);
      font-weight: 800;
      opacity: 1;
      font-size: var(--mid);
    }
  }
`;

export const IndividualGifContainer = styled.div`
  grid-column: span 3;
  p {
    font-family: var(--Merriweather);
    font-size: var(--text);
    padding: 0;
    margin: 0;
    color: var(--white);
    opacity: 0.8;
    text-transform: capitalize;
    margin-bottom: 15px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  img {
    max-width: 500px;
    width: 100%;
    height: 100%;
  }
`;

export const Social = styled.div`
  margin-left: auto;

  h5 {
    padding: 0;
    margin: 0;
    font-family: var(--Merriweather);
    font-size: var(--normal);
  }

  i {
    margin-right: 10px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;
