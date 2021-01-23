import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import { LogIn } from 'react-feather';
import { useHistory, Link } from 'react-router-dom';

import { Container, Content, AnimationContainer, Background } from './styles';

import * as UsersActions from '../../store/actions/user';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/img/logo.png';

const SignIn = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state);
  const formRef = useRef(null);

  const history = useHistory();

  useEffect(() => {
    if (users.isLogged) {
      history.push('/area-do-usuario');
    }
  }, [users.isLogged, history]);

  const handleSubmit = data => {
    dispatch(UsersActions.getUsers(data));
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="O Boticário" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu Login</h1>
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
            />
            <Button type="submit">Entrar</Button>
          </Form>
          <p>Não possui uma conta ? </p>
          <Link to="/cadastro">
            <LogIn />
            Clique aqui para se cadastrar!
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
