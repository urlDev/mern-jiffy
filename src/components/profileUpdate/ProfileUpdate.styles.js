import styled from '@emotion/styled/macro';

export const UpdateContainer = styled.div`
  form {
    width: 100%;
    margin-top: var(--giant);
  }
  label {
    display: inline-block;
    width: 25%;
  }

  input {
    width: 75%;
  }

  button {
    color: var(--white);
    background: var(--iris);
    width: 75%;
    margin-left: auto;
    margin-top: var(--mid);
    border: none;
    cursor: pointer;
  }
`;
