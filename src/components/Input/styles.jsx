import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: #f7f8f9;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #dbe6ea;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${({ isFocused }) =>
    isFocused &&
    css`
      color: #fbab8c;
      border-color: #fbab8c;
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: #fbab8c;
      border-color: #fbab8c;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #fbab8c;
    outline: none;

    &::placeholder {
      color: #666360;
    }
  }
`;
