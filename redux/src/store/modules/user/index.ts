import { Reducer } from 'redux';
import { AuthTypes } from './types';

import { User } from '../../../common/types';

export const INITIAL_STATE: User = {
  login: '',
};

const reducer: Reducer<User> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_SUCCESS:
      return { login: action.payload.data.login };
    case AuthTypes.SIGN_OUT:
      return { login: '' };
    default:
      return state;
  }
};

export default reducer;
