import styled from 'styled-components';

export const TrendingContainer = styled.div`
  // max-width: 1040px;
  // width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px 20px;
  margin-bottom: 100px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
