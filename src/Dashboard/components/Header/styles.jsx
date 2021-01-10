import styled from 'styled-components';

import headerBackgroundImg from '../../../assets/img/floratta.png';
// import headerBackgroundImg from '../../../assets/img/header-background.svg';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  width: 100%;
  height: 250px;
  padding: 30px;
  background: url(${headerBackgroundImg});
  background-size: cover;
  background-position: center;

  h1 {
    margin: 20px 0;
    user-select: none;
  }
`;

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin: 5px 0;
    font-size: 18px;
  }

  h2 {
    font-size: 22px;
    letter-spacing: 1.5px;
  }
`;

export const Balance = styled.button`
  width: 35px;
  transition: color 0.2s;

  svg {
    width: 30px;
    height: 30px;
  }

  &:hover {
    color: #fbab8c;
  }
`;

export const GoBack = styled.button`
  width: 70px;
  display: flex;
  align-items: center;
  transition: color 0.2s;

  &:hover {
    color: #fbab8c;
  }
`;
