import React from 'react';

import { Container, ContainerLogin } from './styles';

const Login: React.FC = () => {
  function handleSubmit(e: React.FormEvent<EventTarget>) {
    e.preventDefault();
  }

  return (
    <Container>
      <ContainerLogin>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input placeholder="Digite o login" />
          <input placeholder="Digite a senha" />
          <button type="submit">Confirmar</button>
        </form>
      </ContainerLogin>
    </Container>
  );
};

export default Login;
