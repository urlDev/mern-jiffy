import styled from 'styled-components';

export const WeCareContainer = styled.a`
  margin-top: 10px;
  cursor: pointer;
  text-decoration: none;
  background: linear-gradient(
    0deg,
    rgba(82, 74, 208, 1) 0%,
    rgba(94, 204, 228, 1) 100%
  );
  //   height: var(--giant);
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1070px;
  width: 100%;
  color: var(--white);
  h3 {
    font-family: var(--Raleway);
    font-weight: 400;
    font-size: var(--mid);
  }
  span {
    font-weight: 900;
    text-transform: uppercase;
  }
  img {
    width: 120px;
  }
  img ~ img {
    width: 70px;
    margin-left: -40px;
  }
  @media (max-width: 500px) {
    height: 100px;
    margin-top: 0;
    h3 {
      font-size: var(--normal);
      padding-left: 10px;
      text-align: center;
    }

    h3 ~ h3 {
      padding-left: 0;
      padding-right: 10px;
    }
    img {
      width: 80px;
      position: relative;
      z-index: 1;
    }

    img ~ img {
      width: var(--giant);
      margin-left: -30px;
      position: relative;
      z-index: 0;
    }
  }
`;
