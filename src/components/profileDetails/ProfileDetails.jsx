import React, { useContext } from 'react';

import { UserContext } from '../../context/UserContext';

import ProfileUpdate from '../profileUpdate/ProfileUpdate';
import DeleteAccountModal from '../deleteAccountModal/DeleteAccountModal';

import { Title } from '../title/Title.styles';
import {
  ProfileDetailsContainer,
  AccountSettingsContainer,
  AvatarContainer,
  PrivacyContainer,
  AccountContainer,
} from './ProfileDetails.styles';

const ProfileDetails = () => {
  const { openAndCloseDeleteModal } = useContext(UserContext);
  return (
    <ProfileDetailsContainer>
      <AvatarContainer>
        <Title>There shall be avatar here</Title>
      </AvatarContainer>
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
