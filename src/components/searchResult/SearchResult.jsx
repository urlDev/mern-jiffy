import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
              <LazyLoadImage
                src={result.images.fixed_width.url}
                height={'200px'}
                width={'100%'}
                threshold={5}
                placeholder={<Placeholder />}
                effect="blur"
                alt=""
                style={{ opacity: '1' }}
              />
            </SubCategoryContainer>
          ))}
      </CategoryContainer>
    </>
  );
};

export default SearchResult;
