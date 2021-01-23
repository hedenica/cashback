import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-grid-system';
import { Form } from '@unform/web';
import Lottie from 'react-lottie';
import { Save } from 'react-feather';
import { ToastContainer } from 'react-toastify';

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

import { totalCashback, createPurchase } from '../../utils/cashback';

import { FormContent } from './styles';

import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { purchases } = useSelector(state => state);
  const formRef = useRef(null);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    dispatch(PurchasesActions.getPurchases());
  }, [dispatch]);

  const handleSubmit = data => {
    let formattedValue = data.value;

    if (data.value.includes(',')) {
      formattedValue = data.value.replace(',', '.');
    }

    dispatch(PurchasesActions.addPurchase({ ...data, value: formattedValue }));

    toggleModal();
  };

  const lottie = (
    <Lottie height={300} options={animationConfig(emptyStateAnimation)} />
  );

  const registerPurchase = (
    <FormContent>
      <h1>Cadastrar compra</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="date" type="date" placeholder="Data da compra" required />
        <Input
          name="code"
          type="text"
          placeholder="Código da compra"
          required
        />
        <Input name="value" type="text" placeholder="00,00" required />
        <Button type="submit">
          <Save />
          Salvar
        </Button>
      </Form>
    </FormContent>
  );

  return (
    <>
      <Header cashback={totalCashback(createPurchase(purchases.data))} />
      <Container>
        {purchases.loading ? (
          <Lottie height={300} options={animationConfig(loadingAnimation)} />
        ) : (
          <Purchases purchases={purchases.data} />
        )}
        {purchases.data.length === 0 && !purchases.loading && (
          <Result
            title="Oops, você ainda não possui compras cadastradas..."
            image={lottie}
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
      <ToastContainer />
    </>
  );
};

export default Dashboard;
