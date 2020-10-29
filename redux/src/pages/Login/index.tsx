import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signInSuccess } from '../../store/modules/user/actions';
import { Container, ContainerLogin } from './styles';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: React.FormEvent<EventTarget>) {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Preencha os campos do login');
    } else {
      dispatch(signInSuccess({ login: email }));
    }
  }

  return (
    <Container>
      <ContainerLogin>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Digite o login"
            name="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Digite a senha"
            name="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <button type="submit">Confirmar</button>
        </form>
      </ContainerLogin>
    </Container>
  );
};

export default Login;
