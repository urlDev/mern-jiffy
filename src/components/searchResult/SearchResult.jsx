import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { GifContext } from '../../context/GifContext';

import {
  CategoryContainer,
  SubCategoryContainer,
} from '../category/Category.styles';
import { Title } from '../title/Title.styles';

const SearchResult = () => {
  const { searchCategoryResult, getGif } = useContext(GifContext);
  console.log(searchCategoryResult);
  return (
    <>
      <Title>
        {searchCategoryResult && searchCategoryResult.title}{' '}
        <span>Results</span>
      </Title>
      <CategoryContainer>
        {searchCategoryResult.data &&
          Object.values(searchCategoryResult.data).map((result) => (
            <SubCategoryContainer
              key={uuidv4()}
              to={`/${result.slug}`}
              onClick={() => getGif(result)}
            >
              <img src={result.images.downsized.url} alt="" />
            </SubCategoryContainer>
          ))}
      </CategoryContainer>
    </>
  );
};

export default SearchResult;
