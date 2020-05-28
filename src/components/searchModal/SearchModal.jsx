import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { GifContext } from '../../context/GifContext';

import { SearchModalContainer, Modal, Results } from './SearchModal.styles';

const SearchModal = () => {
  const { modal, closeModal, search, searchCategory, setInput } = useContext(
    GifContext
  );
  return (
    <>
      {modal && search.length ? (
        <Modal onClick={closeModal}>
          <SearchModalContainer>
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
