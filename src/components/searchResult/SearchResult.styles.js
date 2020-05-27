import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const SearchResultContainer = styled.div`
  color: var(--white);
  text-decoration: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-bottom: var(--big);
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    opacity: 0.8;
  }
`;
