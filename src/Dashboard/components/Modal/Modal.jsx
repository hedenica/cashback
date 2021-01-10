/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

import { Background, ModalWrapper, CloseModal } from './styles';

const Modal = ({ isOpen, onClose, firstModalContent, secondModalContent }) => {
  const modalRef = useRef(null);

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper>
              {firstModalContent}
              {secondModalContent}
              <CloseModal aria-label="Fechar modal" onClick={onClose} />
            </ModalWrapper>
          </animated.div>
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
