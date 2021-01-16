import styled from 'styled-components';
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
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
