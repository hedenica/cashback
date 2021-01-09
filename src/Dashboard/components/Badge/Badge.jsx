/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Badge = ({ children, size, variation }) => (
  <Container size={size} variation={variation}>
    {children}
  </Container>
);

export default Badge;

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  variation: PropTypes.string,
};

Badge.defaultProps = {
  size: 'medium',
  variation: 'success',
};
