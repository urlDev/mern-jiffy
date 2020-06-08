import React, { useContext } from 'react';

import { UserContext } from '../../context/UserContext';

import ProfileImage from '../profileImage/ProfileImage';
import ProfileUpdate from '../profileUpdate/ProfileUpdate';
import DeleteAccountModal from '../deleteAccountModal/DeleteAccountModal';

import { Title } from '../title/Title.styles';
import {
  ProfileDetailsContainer,
  AccountSettingsContainer,
  PrivacyContainer,
  AccountContainer,
} from './ProfileDetails.styles';

const ProfileDetails = () => {
  const { openAndCloseDeleteModal } = useContext(UserContext);
  return (
    <ProfileDetailsContainer>
      <ProfileImage />
      <AccountSettingsContainer>
        <AccountContainer>
          <Title>Account Settings</Title>
          <ProfileUpdate />
        </AccountContainer>

        <PrivacyContainer>
          <p>Account privacy</p>
          <button
            onClick={() => {
              openAndCloseDeleteModal();
            }}
          >
            Delete Account
          </button>
        </PrivacyContainer>
        <DeleteAccountModal />
      </AccountSettingsContainer>
    </ProfileDetailsContainer>
  );
};

export default ProfileDetails;
