import styled from '@emotion/styled/macro';

export const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  img {
    width: 100%;
  }

  p {
    opacity: 0.7;
  }

  span {
    color: var(--light-green);
    font-weight: bold;
  }

  input[type='file'] {
    visibility: hidden;
    position: absolute;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  label {
    color: var(--white);
    background: var(--iris);
    font-family: var(--Merriweather);
    font-size: var(--text);
    font-weight: 600;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background 0.2s linear;
    &:hover {
      background: var(--blue-violet);
    }
  }

  @media (max-width: 800px) {
    margin: 0 auto;
    img {
      width: 100%;
    }
    form {
      width: 100%;
    }
  }
`;
