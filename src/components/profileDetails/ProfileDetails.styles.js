import styled from 'styled-components';

export const ProfileDetailsContainer = styled.div`
  color: var(--white);
  margin: var(--sub-header) 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  p,
  label {
    font-family: var(--Merriweather);
    font-size: var(--text);
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

export const AccountSettingsContainer = styled.div`
  grid-column: span 3;
  @media (max-width: 800px) {
    grid-column: 1/1;
    margin-top: var(--sub-header);
  }
`;

export const PrivacyContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: var(--sub-header);
  background: var(--dark-gray);
  padding: var(--big) var(--whaat);
  button {
    color: var(--white);
    background: var(--iris);
    width: 75%;
    margin-left: auto;
    border: none;
    height: 40px;
    font-family: var(--Merriweather);
    font-size: var(--text);
    font-weight: 600;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    padding: 20px;
  }
`;

export const AccountContainer = styled.div`
  background: var(--dark-gray);
  padding: 1px var(--whaat);
  padding-bottom: var(--big);
  @media (max-width: 800px) {
    padding: 20px;
  }
`;
