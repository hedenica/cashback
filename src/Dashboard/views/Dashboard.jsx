/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-grid-system';
import Lottie from 'react-lottie';

import Button from '../../App/components/Button';
import FloatingButton from '../components/FloatingButton';
import Header from '../components/Header';
import Item from '../components/Item';
import Result from '../../App/components/Result';

import emptyStateAnimation from '../../assets/lotties/empty-bags.json';

const Dashboard = () => {
  const loadingAnimationConfig = {
    loop: true,
    autoplay: true,
    animationData: emptyStateAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  };

  return (
    <>
      <Header />
      <Container>
        <Item status="warning" />
        <Item status="success" />
        <Item status="danger" />
        <Item status="warning" />
        <Item status="success" />
        {/* <Result
          title="Oops, você ainda não possui compras cadastradas..."
          image={<Lottie height={300} options={loadingAnimationConfig} />}
          callToAction={<Button>Cadastrar compra</Button>}
        /> */}
        <FloatingButton />
      </Container>
    </>
  );
};

export default Dashboard;
