/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-grid-system';
import { Form } from '@unform/web';
import Lottie from 'react-lottie';
import { Save } from 'react-feather';

import * as PurchasesActions from '../../store/actions/purchases';
import animationConfig from '../../utils/animation';

import Button from '../../components/Button';
import FloatingButton from '../../components/FloatingButton';
import Header from '../../components/Header';
import Purchases from '../../components/Purchases';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import Result from '../../components/Result';
import Table from '../../components/Table';

import emptyStateAnimation from '../../assets/lotties/empty-bags.json';
import loadingAnimation from '../../assets/lotties/loading.json';

import { FormContent } from './styles';

const Dashboard = () => {
  const dispatch = useDispatch();

  const formRef = useRef(null);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const { purchases } = useSelector(state => state);

  useEffect(() => {
    dispatch(PurchasesActions.getPurchases());
  }, [dispatch]);

  const handleSubmit = (data) => {
    dispatch(PurchasesActions.addPurchase(data));
    toggleModal()
  }
  
  const registerPurchase = (
    <FormContent>
      <h1>Cadastrar compra</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input 
          name="date" 
          type="date" 
          placeholder="Data da compra" 
          required 
        />
        <Input 
          name="code" 
          type="number" 
          placeholder="Código da compra" 
          required 
        />
        <Input 
          name="value" 
          type="text" 
          placeholder="Valor da compra" 
          required 
        />
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
        {purchases.loading ? (
          <Lottie height={300} options={animationConfig(loadingAnimation)} />
        ) : (
          <Purchases purchases={purchases.data} />
        )}
        {purchases.data.length === 0 && !purchases.loading  && (
          <Result
            title="Oops, você ainda não possui compras cadastradas..."
            image={(
              <Lottie
                height={300}
                options={animationConfig(emptyStateAnimation)}
              />
            )}
            callToAction={
              <Button onClick={toggleModal}>Cadastrar compra</Button>
            }
          />
        )}
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
