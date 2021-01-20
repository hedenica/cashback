import styled, { keyframes } from 'styled-components';
import { X } from 'react-feather';

export const Background = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-self: center;
  background: rgba(85, 85, 85, 0.8);
  z-index: 2;
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #f7f7f7;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  z-index: 10;
  border-radius: 10px;
  margin: 200px auto;

  animation: ${appearFromTop} 1s;

  @media (max-width: 767px) {
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    flex-direction: column;
    bottom: 0;
    border-radius: 0;
    margin: auto;
  }
`;

export const CloseModal = styled(X)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;

  &:hover {
    color: #fbab8c;
  }
`;
