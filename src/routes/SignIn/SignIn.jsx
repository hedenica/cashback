import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { LogIn } from 'react-feather';
import { Link } from 'react-router-dom';

import { Container, Content, AnimationContainer, Background } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/img/logo.png';

const SignIn = () => {
  const formRef = useRef(null);

  const handleSubmit = () => console.log('logou!');

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
