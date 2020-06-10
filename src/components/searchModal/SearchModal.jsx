import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { GifContext } from '../../context/GifContext';

import { Results, Modal, SearchModalContainer } from './SearchModal.styles';

const SearchModal = () => {
  const {
    modal,
    width,
    closeModal,
    search,
    searchCategory,
    setInput,
    scroll,
    scrollY,
  } = useContext(GifContext);

  return (
    <>
      {modal && search.length ? (
        <Modal onClick={closeModal}>
          <SearchModalContainer
            className={scroll > 0 && width >= 1080 ? 'modal' : ''}
            style={{ marginTop: `calc(124px - ${scrollY}px)` }}
          >
            {Object.values(search).map((term) => (
              <React.Fragment key={uuidv4()}>
                <Results
                  to={`/search/${term.name.split(' ').join('-')}`}
                  onClick={() => {
                    searchCategory(`${term.name}`);
                    setInput(`${term.name}`);
                  }}
                >
                  {term.name}
                </Results>
                <hr />
              </React.Fragment>
            ))}
          </SearchModalContainer>
        </Modal>
      ) : null}
    </>
  );
};

export default SearchModal;
