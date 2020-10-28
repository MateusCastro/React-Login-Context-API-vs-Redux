import React from 'react';

import { Container } from './styles';

import { useAuth } from '../../contexts/auth';

const Header: React.FC = () => {
  const { signIn, user } = useAuth();

  return (
    <Container>
      <div>
        <h1>
          Bem vindo,
          {' '}
          {user?.login}
        </h1>
        <div onClick={() => signIn(null)} aria-hidden="true">

          <span>Sair</span>
        </div>
      </div>
    </Container>
  );
};
export default Header;
