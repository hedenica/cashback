import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { Background, ModalWrapper, CloseModal } from './styles';

const Modal = ({ isOpen, onClose, firstModalContent, secondModalContent }) => {
  const modalRef = useRef(null);

  const closeModal = e => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper>
            {firstModalContent}
            {secondModalContent}
            <CloseModal aria-label="Fechar modal" onClick={onClose} />
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  firstModalContent: PropTypes.node,
  secondModalContent: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  firstModalContent: '',
};
