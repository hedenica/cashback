import React from 'react';
import PropTypes from 'prop-types';
import { ScreenClassRender } from 'react-grid-system';

import Badge from '../Badge';

import { Container, Details, Mobile } from './styles';

// código da compra - ok
// valor - ok
// data - ok
// status - ok
// % de cashback aplicado
// valor do cashback

const Item = ({ status }) => {
  const currentStatus = {
    success: 'Aprovado',
    warning: 'Em validação',
    danger: 'Reprovado',
  };

  return (
    <ScreenClassRender
      render={screenClass => {
        const isMobileScreen = ['xs', 'sm'].includes(screenClass);

        return isMobileScreen ? (
          <Container>
            <Mobile>
              <span>10/01/2020</span>
              <span>123456</span>
              <p>R$150,00</p>
            </Mobile>
            <Badge size="medium" variation={status}>
              {currentStatus[status]}
            </Badge>
            <Details type="button">Detalhes</Details>
          </Container>
        ) : (
          <Container>
            <span>10/01/2020</span>
            <span>123456</span>
            <Badge size="medium" variation={status}>
              {currentStatus[status]}
            </Badge>
            <p>R$150,00</p>
            <Details type="button">Detalhes</Details>
          </Container>
        );
      }}
    />
  );
};

export default Item;

Item.propTypes = {
  status: PropTypes.string.isRequired,
};
