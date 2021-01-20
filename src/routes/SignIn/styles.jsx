import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/img/makeup-brush.jpg';

export const Container = styled.div`
  height: 100vh;
  min-height: 650px;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 600px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  img {
    width: 400px;
    height: auto;
  }

  form {
    margin: 50px 0;
    width: 400px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  a {
    display: block;
    margin-top: 24px;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#fbab8c')};
    }
  }

  @media (max-width: 425px) {
    img {
      width: 300px;
    }

    form {
      width: 350px;
    }
  }

  @media (max-width: 320px) {
    form {
      width: 300px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
