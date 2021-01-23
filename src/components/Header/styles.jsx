import styled from 'styled-components';

import headerBackgroundImg from '../../assets/img/wave.png';

export const Background = styled.div`
  position: absolute;
  background: url(${headerBackgroundImg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 550px;
  transform: rotate(180deg);
`;

export const Container = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 320px;
`;

export const Logo = styled.img`
  width: 180px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  h1 {
    font-size: 20px;
  }
`;

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;

  h2 {
    font-size: 22px;
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
    color: white;
  }
`;
