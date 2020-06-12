import styled from 'styled-components';

export const LoadingContainer = styled.div`
  //   height: 300px;
  //   width: 300px;
  background: rgba(138, 51, 225, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--big);
  div {
    background: url(${require(`../../assets/neonHeartsFull.svg`)}) left center;
    background-size: cover;
    display: inline-block;
    width: 40px;
    height: 30px;
    margin-bottom: 20px;
    animation: login 4s steps(18) infinite;
    @media (max-width: 500px) {
      width: var(--big);
      height: 20px;
    }
  }
  h1 {
    font-family: var(--Raleway);
    padding: 0;
    margin: 0;
  }
`;
