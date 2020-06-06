import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';

import { ModalContainer, DeleteModal } from './DeleteAccountModal.styles';

const DeleteAccountModal = () => {
  const {
    deleteModal,
    openAndCloseDeleteModal,
    logOut,
    deleteAccount,
  } = useContext(UserContext);
  return (
    <>
      {deleteModal && (
        <ModalContainer onClick={openAndCloseDeleteModal}>
          <DeleteModal>
            <h3>Are you sure you want to delete your account? </h3>
            <p>
              Everything about your account will be gone, including awesome{' '}
              <span>GIFs</span> you saved.
              <br />
              Would you rather want to{' '}
              <Link
                to="/"
                onClick={() => {
                  logOut();
                  openAndCloseDeleteModal();
                }}
              >
                log out
              </Link>{' '}
              instead?
            </p>
            <div>
              <button onClick={openAndCloseDeleteModal}>Cancel</button>
              <button
                onClick={() => {
                  deleteAccount();
                  openAndCloseDeleteModal();
                }}
              >
                Delete my account
              </button>
            </div>
          </DeleteModal>
        </ModalContainer>
      )}
    </>
  );
};

export default DeleteAccountModal;
