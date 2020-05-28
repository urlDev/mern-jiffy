import styled from 'styled-components';

export const PlaceholderContainer = styled.div`
  background-color: var(--blue-violet);
  height: 200px;
  width: 100%;
  & > &:nth-child(2) {
    background: var(--sky-blue);
  }
`;
