/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import { ScreenClassRender } from 'react-grid-system';
import { Calendar, Tag, Percent, DollarSign, RefreshCcw } from 'react-feather';

import Badge from '../Badge';
import Modal from '../Modal';

import cashbackAnimation from '../../../assets/lotties/piggy-bank-coins.json';

import { Container, Details, Mobile, ModalSecondContent } from './styles';

const Item = ({ status }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const currentStatus = {
    success: 'Aprovado',
    warning: 'Em validação',
    danger: 'Reprovado',
  };

  const loadingAnimationConfig = {
    loop: true,
    autoplay: true,
    animationData: cashbackAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  };

  const animation = <Lottie height={400} options={loadingAnimationConfig} />;

  const cashbackDetails = (
    <ModalSecondContent>
      <h3>Detalhes de Cashback</h3>
      <p>
        <Calendar />
        Data - 10/01/2021
      </p>
      <p>
        <Tag />
        Código - 123456
      </p>
      <p>
        <Percent />
        Cashback aplicado - 3%
      </p>
      <p>
        <DollarSign />
        Valor da compra - R$ 150,00
      </p>
      <p>
        <RefreshCcw />
        Cashback - R$ 4,50
      </p>
      <Badge size="medium" variation={status}>
        {currentStatus[status]}
      </Badge>
    </ModalSecondContent>
  );

  return (
    <>
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
              <Details type="button" onClick={toggleModal}>
                Detalhes
              </Details>
            </Container>
          ) : (
            <Container>
              <span>10/01/2020</span>
              <span>123456</span>
              <Badge size="medium" variation={status}>
                {currentStatus[status]}
              </Badge>
              <p>R$150,00</p>
              <Details type="button" onClick={toggleModal}>
                Detalhes
              </Details>
            </Container>
          );
        }}
      />
      <Modal
        isOpen={showModal}
        onClose={toggleModal}
        firstModalContent={animation}
        secondModalContent={cashbackDetails}
      />
    </>
  );
};

export default Item;

Item.propTypes = {
  status: PropTypes.string.isRequired,
};
