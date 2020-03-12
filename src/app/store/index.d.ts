import { createStore } from 'redux';
import { InitialState, DispatchAction, rootReducer } from './root-reducer.ts'; // check with Alexis

export const store = createStore<InitialState, DispatchAction, null, null>(
  rootReducer
);
