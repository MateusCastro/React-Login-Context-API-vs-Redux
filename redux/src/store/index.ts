import { createStore, Store } from 'redux';
import { persistStore } from 'redux-persist';

import persistReducers from './persistReducers';
import { User } from '../common/types';
import rootReducer from './modules/rootReducer';

export interface ApplicationState {
  user: User;
}

const store: Store<ApplicationState> = createStore(persistReducers(rootReducer));
const persistor = persistStore(store);

export { store, persistor };
