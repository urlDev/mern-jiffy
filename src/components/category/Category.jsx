import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import LazyLoad from 'react-lazyload';

import { GifContext } from '../../context/GifContext';

import Placeholder from '../placeholder/Placeholder';
import { CategoryContainer, SubCategoryContainer } from './Category.styles';
import { Title } from '../title/Title.styles';

const Category = () => {
  const { category, searchCategory } = useContext(GifContext);
  return (
    <>
      <Title>
        {category.title &&
          category.title[0].toUpperCase() + category.title.slice(1)}{' '}
        <span>GIFs</span>
      </Title>
      <CategoryContainer>
        {category.data &&
          Object.values(category.data).map((topic) => (
            <SubCategoryContainer
              to={`/search/${topic.name.split(' ').join('-')}`}
              onClick={() => searchCategory(`${topic.name}`)}
              key={uuidv4()}
            >
              <h4>{topic.name.toUpperCase()}</h4>
              <LazyLoad
                height={200}
                offset={100}
                placeholder={<Placeholder />}
                once
              >
                <img
                  src={topic.gif.images.original.webp}
                  style={{ opacity: '0.8' }}
                  alt={topic.title}
                />
              </LazyLoad>
            </SubCategoryContainer>
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
