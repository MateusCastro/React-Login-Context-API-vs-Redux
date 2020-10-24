import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <div>
      <h1>Voltar pra Home</h1>
      <Link to="/login">Sair</Link>
    </div>
  </Container>
);

export default Header;
