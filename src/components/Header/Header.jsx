import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'react-feather';
import PropTypes from 'prop-types';

import {
  Background,
  Container,
  Avatar,
  BalanceContainer,
  Balance,
  GoBack,
  UserInfo,
} from './styles';

import formatValue from '../../utils/formatValue';

import avatarImg from '../../assets/img/avatar.svg';

const Header = ({ cashback }) => {
  const [isVisible, setVisible] = useState(false);

  const toggleShowCurrentBalance = () => setVisible(!isVisible);

  return (
    <>
      <Background />
      <Container>
        <GoBack type="button">
          <ArrowLeft />
          Voltar
        </GoBack>
        <UserInfo>
          <Avatar src={avatarImg} alt="Avatar do Usuário" />
          <h1>Hedênica Morais</h1>
        </UserInfo>
        <BalanceContainer>
          <Balance type="button" onClick={toggleShowCurrentBalance}>
            {isVisible ? <EyeOff /> : <Eye />}
          </Balance>
          {isVisible ? (
            <>
              <h3>Seu saldo atual é:</h3>
              <h2>{formatValue(parseFloat(cashback))}</h2>
            </>
          ) : (
            <h3>Clique para visualizar seu saldo</h3>
          )}
        </BalanceContainer>
      </Container>
    </>
  );
};
export default Header;

Header.propTypes = {
  cashback: PropTypes.string.isRequired,
};
