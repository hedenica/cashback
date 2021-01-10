import React from 'react';
import PropTypes from 'prop-types';
import { Plus } from 'react-feather';

import { Container } from './styles';

const FloatingButton = ({ showModal }) => (
  <Container type="button" onClick={showModal}>
    <Plus />
  </Container>
);

export default FloatingButton;

FloatingButton.propTypes = {
  showModal: PropTypes.func.isRequired,
};
