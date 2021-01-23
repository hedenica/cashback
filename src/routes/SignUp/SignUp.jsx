import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { LogIn } from 'react-feather';

import { Container, Content, AnimationContainer, Background } from './styles';

import * as UsersActions from '../../store/actions/user';
import { cpfMask } from '../../utils/masks';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/img/logo.png';

const SignUp = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state);
  const formRef = useRef(null);

  const [applyDocumentMask, setApplyDocumentMask] = useState('');

  const handleDocumentChange = ({ target }) => {
    setApplyDocumentMask(cpfMask(target.value));
  };

  const history = useHistory();

  useEffect(() => {
    if (users.isLogged) {
      history.push('/area-do-usuario');
    }
  }, [users.isLogged, history]);

  const handleSubmit = data => {
    dispatch(UsersActions.addUser(data));
  };

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="O Boticário" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu Cadastro</h1>
            <Input
              name="name"
              type="text"
              autoComplete="username"
              placeholder="Digite seu nome completo"
              required
            />
            <Input
              name="cpf"
              type="text"
              placeholder="Digite seu CPF"
              required
              value={applyDocumentMask}
              onChange={handleDocumentChange}
            />
            <Input
              name="email"
              type="email"
              autoComplete="username"
              placeholder="Digite seu e-mail"
              required
            />
            <Input
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Digite sua senha"
              required
              minLength={6}
            />
            <Button type="submit">Cadastrar</Button>
          </Form>

          <p>Já tem cadastro ? </p>
          <Link to="/">
            <LogIn />
            Clique aqui para logar!
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
