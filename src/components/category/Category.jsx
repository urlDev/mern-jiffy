import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
              <LazyLoadImage
                src={topic.gif.images.fixed_width.url}
                height={'200px'}
                width={'100%'}
                threshold={5}
                effect="blur"
                style={{ opacity: '0.8' }}
                placeholder={<Placeholder />}
                alt=""
              />
            </SubCategoryContainer>
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
