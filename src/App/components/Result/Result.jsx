import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Content } from './styles';

const Result = ({ image, title, description, callToAction }) => (
  <Container>
    <Image>{image}</Image>
    <Content>
      <h4>{title}</h4>
      <p>{description}</p>
      {callToAction && callToAction}
    </Content>
  </Container>
);

export default Result;

Result.propTypes = {
  callToAction: PropTypes.node,
  description: PropTypes.node,
  image: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Result.defaultProps = {
  callToAction: null,
  description: '',
  title: '',
};
