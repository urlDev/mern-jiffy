import styled from 'styled-components';

export const FixedContainer = styled.div`
  background: var(--smoke-black);
  display: flex;
  align-items: center;
  color: var(--white);
  position: fixed;
  top: 0;
  width: calc(100% - 10px);
  max-width: 1040px;
  z-index: 5;
  height: calc(20px + var(--whaat));
  @media (max-width: 1080px) {
    display: none;
  }
`;
