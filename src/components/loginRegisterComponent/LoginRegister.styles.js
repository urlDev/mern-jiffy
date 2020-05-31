import styled from 'styled-components';

export const LoginRegisterNav = styled.div`
  margin-top: 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--white);
  padding: 0 15px;
`;

export const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  transform: translateX(calc((100% - 100vw) / 2));
  opacity: 0.4;
`;
