import styled from 'styled-components';

import headerBackgroundImg from '../../assets/img/wave.png';

export const Background = styled.div`
  position: absolute;
  background: url(${headerBackgroundImg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 500px;
  transform: rotate(180deg);
`;

export const Container = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  width: 100%;
  height: 250px;
  padding: 30px;

  h1 {
    user-select: none;
    font-size: 20px;
  }
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;

export const UserInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 20px 0;
`;

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin: 5px 0;
    font-size: 18px;
  }

  h2 {
    font-size: 20px;
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
