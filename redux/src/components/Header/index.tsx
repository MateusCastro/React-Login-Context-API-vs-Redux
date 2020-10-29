import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from '../../store';
import { User } from '../../common/types';
import { signOut } from '../../store/modules/user/actions';
import { Container } from './styles';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector<ApplicationState, User>(
    (state) => state.user,
  );
  return (
    <Container>
      <div>
        <h1>
          Bem vindo,
          {' '}
          {user.login}
        </h1>
        <div onClick={() => dispatch(signOut())} aria-hidden="true">

          <span>Sair</span>
        </div>
      </div>
    </Container>
  );
};
export default Header;
