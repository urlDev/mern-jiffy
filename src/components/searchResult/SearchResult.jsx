import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import LazyLoad from 'react-lazyload';

import { GifContext } from '../../context/GifContext';

import Placeholder from '../placeholder/Placeholder';
import {
  CategoryContainer,
  SubCategoryContainer,
} from '../category/Category.styles';
import { Title } from '../title/Title.styles';

const SearchResult = () => {
  const { searchCategoryResult, getGif } = useContext(GifContext);

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
              <LazyLoad height={200} offset={200} placeholder={<Placeholder />}>
                <img
                  src={result.images.original.webp}
                  style={{ opacity: '0.8' }}
                  alt={result.title}
                />
              </LazyLoad>
            </SubCategoryContainer>
          ))}
      </CategoryContainer>
    </>
  );
};

export default SearchResult;
