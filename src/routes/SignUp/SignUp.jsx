import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { LogIn } from 'react-feather';
import { Link } from 'react-router-dom';

import { Container, Content, AnimationContainer, Background } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/img/logo.png';

const SignUp = () => {
  const formRef = useRef(null);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="O Boticário" />
          <Form ref={formRef} onSubmit={() => console.log('submit!')}>
            <h1>Faça seu Cadastro</h1>
            <Input
              name="name"
              type="text"
              autoComplete="username"
              placeholder="Digite seu nome completo"
              required
            />
            <Input
              name="document"
              type="text"
              placeholder="Digite seu CPF"
              required
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
