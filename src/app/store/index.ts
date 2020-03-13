import { createStore } from 'redux';
import {
  InitialState,
  DispatchAction,
  rootReducer,
} from './Reducer/root-reducer'; // check with Alexis

export const store = createStore<InitialState, DispatchAction, null, null>(
  rootReducer
);
