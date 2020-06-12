import styled from '@emotion/styled/macro';

import { SubCategoryContainer } from '../category/Category.styles';

export const PlaceholderContainer = styled.div`
  height: 200px;
  width: 100%;
  ${SubCategoryContainer}:nth-of-type(5n + 1) > {
    background: var(--pink);
  }
  ${SubCategoryContainer}:nth-of-type(5n + 2) > & {
    background-color: var(--iris);
  }
  ${SubCategoryContainer}:nth-of-type(5n + 3) > & {
    background-color: var(--indian-red);
  }
  ${SubCategoryContainer}:nth-of-type(5n + 4) > & {
    background-color: var(--light-green);
  }
  ${SubCategoryContainer}:nth-of-type(5n + 5) > & {
    background-color: var(--sky-blue);
  }
`;
