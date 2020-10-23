import React from 'react';

import { Container } from './styles';

const Login: React.FC = () => (
  <Container>
    <h1>Login</h1>
    <form>
      <input placeholder="Digite o login" />
      <input placeholder="Digite a senha" />
      <button type="submit">Confirmar</button>
    </form>
  </Container>
);

export default Login;
