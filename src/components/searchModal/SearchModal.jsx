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
  } = useContext(GifContext);

  console.log(width);

  return (
    <>
      {modal && search.length ? (
        <Modal
          onClick={closeModal}
          className={scroll > 0 && width >= 1080 ? 'position' : ''}
        >
          <SearchModalContainer
            className={scroll > 0 && width >= 1080 ? 'modal' : ''}
          >
            {search &&
              Object.values(search).map((term) => (
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
