import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'react-feather';

import { Container, BalanceContainer, Balance, GoBack } from './styles';

const Header = () => {
  const [isVisible, setVisible] = useState(true);

  const toggleShowCurrentBalance = () => setVisible(!isVisible);

  return (
    <Container>
      <GoBack type="button">
        <ArrowLeft />
        Voltar
      </GoBack>
      <h1>👋 Olá, Hedênica Morais</h1>
      <BalanceContainer>
        <Balance type="button" onClick={toggleShowCurrentBalance}>
          {isVisible ? <EyeOff /> : <Eye />}
        </Balance>
        {isVisible ? (
          <>
            <h3>Seu saldo atual é:</h3>
            <h2>R$500,00</h2>
          </>
        ) : (
          <h3>Clique para visualizar seu saldo</h3>
        )}
      </BalanceContainer>
    </Container>
  );
};
export default Header;
