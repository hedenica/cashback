/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import { ScreenClassRender } from 'react-grid-system';
import { Calendar, Tag, Percent, DollarSign, RefreshCcw } from 'react-feather';

import Badge from '../Badge';
import Button from '../Button';
import Modal from '../Modal';

import cashbackAnimation from '../../assets/lotties/piggy-bank-coins.json';

import { Container, Details, Mobile, ModalSecondContent } from './styles';
import animationConfig from '../../utils/animation';

const Purchase = ({
  status,
  date,
  code,
  value,
  percentage,
  cashback,
  onDelete,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const currentStatus = {
    success: 'Aprovado',
    warning: 'Em validação',
    danger: 'Reprovado',
  };

  const animation = (
    <Lottie height={400} options={animationConfig(cashbackAnimation)} />
  );

  const cashbackDetails = (
    <ModalSecondContent>
      <h3>Detalhes de Cashback</h3>
      <p>
        <Calendar />
        Data - {date}
      </p>
      <p>
        <Tag />
        Código - {code}
      </p>
      <p>
        <Percent />
        Cashback aplicado - {percentage}%
      </p>
      <p>
        <DollarSign />
        Valor da compra - {value}
      </p>
      <p>
        <RefreshCcw />
        Cashback - {cashback}
      </p>
      <Badge size="medium" variation={status}>
        {currentStatus[status]}
      </Badge>
      <Button onClick={onDelete}>Excluir compra</Button>
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
                <span>{date}</span>
                <span>{code}</span>
                <p>{value}</p>
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
              <span>{date}</span>
              <span>{code}</span>
              <Badge size="medium" variation={status}>
                {currentStatus[status]}
              </Badge>
              <p>{value}</p>
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

export default Purchase;

Purchase.propTypes = {
  cashback: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  percentage: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Purchase.defaultProps = {
  onDelete: () => {},
};
