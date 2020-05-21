import styled from 'styled-components';

export const WeCareContainer = styled.div`
  margin-top: 10px;
  background: linear-gradient(
    0deg,
    rgba(82, 74, 208, 1) 0%,
    rgba(94, 204, 228, 1) 100%
  );
  //   height: var(--giant);
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1040px;
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
`;
