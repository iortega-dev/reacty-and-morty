import { Action } from 'redux';
import { Reducer } from 'react';

export enum ActionType {
  UpdateName,
  UpdateAddress,
  DeleteName,
  DeleteAddress,
}

export interface InitialState {
  name: string;
  address: string;
}

export const initialState: InitialState = {
  name: '',
  address: '',
};

export interface DispatchAction extends Action<ActionType> {
  payload: Partial<InitialState>;
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionType.UpdateName:
      return { ...state, name: action.payload.name };
    case ActionType.DeleteName:
      return { ...state, name: '' };
    case ActionType.DeleteAddress:
      return { ...state, address: '' };
    case ActionType.UpdateAddress:
      return { ...state, name: action.payload.address };
    default:
      return state;
  }
};
