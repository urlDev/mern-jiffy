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

const DefaultCategorySearchResult = ({ type, visible }) => {
  const { searchCategory, getGif } = useContext(GifContext);
  return (
    <>
      <Title>
        {type.title && type.title} <span>GIFs</span>
      </Title>
      <CategoryContainer>
        {type.data &&
          Object.values(type.data).map((topic) => (
            <SubCategoryContainer
              to={
                visible
                  ? `/search/${topic.name.split(' ').join('-')}`
                  : `/${topic.slug}`
              }
              onClick={
                visible
                  ? () => searchCategory(`${topic.name}`)
                  : () => getGif(topic)
              }
              key={uuidv4()}
            >
              {visible && <h4>{topic.name.toUpperCase()}</h4>}
              <LazyLoad
                height={200}
                offset={100}
                placeholder={<Placeholder />}
                once
              >
                <img
                  src={
                    visible
                      ? topic.gif.images.original.webp
                      : topic.images.original.webp
                  }
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

export default DefaultCategorySearchResult;
