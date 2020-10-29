import { action } from 'typesafe-actions';

import { AuthTypes } from './types';
import { User } from '../../../common/types';

export const signInSuccess = (data: User) => action(AuthTypes.SIGN_IN_SUCCESS, { data });
export const signOut = () => action(AuthTypes.SIGN_OUT);
