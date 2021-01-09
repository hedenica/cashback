import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

  ${({ size }) =>
    size === 'small' &&
    css`
      width: 80px;
      font-size: 14px;
    `}

  ${({ size }) =>
    size === 'medium' &&
    css`
      width: 110px;
      font-size: 15px;
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      width: 150px;
      font-size: 18px;
    `}

    ${({ variation }) =>
    variation === 'success' &&
    css`
      background: #c5f0de;
      color: #12945d;
    `}

    ${({ variation }) =>
    variation === 'warning' &&
    css`
      background: #ffeaa0;
      color: #806b21;
    `}

    ${({ variation }) =>
    variation === 'danger' &&
    css`
      background: #ffd1d1;
      color: #802323;
    `}

    @media (max-width: 425px) {
    font-size: 14px;
    min-width: 100px;
  }
`;
