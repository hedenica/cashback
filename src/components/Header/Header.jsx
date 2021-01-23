/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Eye, EyeOff } from 'react-feather';
import PropTypes from 'prop-types';

import {
  Background,
  Balance,
  BalanceContainer,
  Container,
  Logo,
  UserInfo,
} from './styles';

import formatValue from '../../utils/formatValue';

import logoImg from '../../assets/img/logo.png';

const Header = ({ cashback }) => {
  const { users } = useSelector(state => state);
  const [isVisible, setVisible] = useState(false);

  const toggleShowCurrentBalance = () => setVisible(!isVisible);

  return (
    <>
      <Background />
      <Container>
        <Logo src={logoImg} alt="Logo Boticário" />
        <UserInfo>
          {users.isLogged && <h1>{`Bem-vindx, ${users.data.name}`}</h1>}
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
            <h3>Mostrar saldo atual</h3>
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
