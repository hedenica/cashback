/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { Container } from 'react-grid-system';
import { Form } from '@unform/web';
import Lottie from 'react-lottie';
import { Save } from 'react-feather';

import Button from '../../App/components/Button';
import FloatingButton from '../components/FloatingButton';
import Header from '../components/Header';
import Item from '../components/Item';
import Input from '../../App/components/Input';
import Modal from '../components/Modal';
import Result from '../../App/components/Result';
import Table from '../components/Table';

import emptyStateAnimation from '../../assets/lotties/empty-bags.json';

import { FormContent } from './styles';

const Dashboard = () => {
  const formRef = useRef(null);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const loadingAnimationConfig = {
    loop: true,
    autoplay: true,
    animationData: emptyStateAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  };

  const handleSubmit = data => {
    console.log(data);
  };

  const registerPurchase = (
    <FormContent>
      <h1>Cadastrar compra</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="date" type="date" placeholder="Data da compra" />
        <Input name="code" type="text" placeholder="Código da compra" />
        <Input name="value" type="text" placeholder="Valor da compra" />
        <Button type="submit">
          <Save />
          Salvar
        </Button>
      </Form>
    </FormContent>
  );

  return (
    <>
      <Header />
      <Container>
        <Item status="warning" />
        <Item status="success" />
        <Item status="danger" />
        <Result
          title="Oops, você ainda não possui compras cadastradas..."
          image={<Lottie height={300} options={loadingAnimationConfig} />}
          callToAction={<Button onClick={toggleModal}>Cadastrar compra</Button>}
        />
        <FloatingButton showModal={toggleModal} />
      </Container>
      <Modal
        isOpen={showModal}
        onClose={toggleModal}
        firstModalContent={<Table />}
        secondModalContent={registerPurchase}
      />
    </>
  );
};

export default Dashboard;
