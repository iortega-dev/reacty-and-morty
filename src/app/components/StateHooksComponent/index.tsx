import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InitialState } from '~Store/Reducer/root-reducer';
import { StateProps } from '~Types/StateProps';
import { RootDispatcher } from '~Store/Dispatcher/root-redux';

const StateHooksComponent = () => {
  // Asign name and address state
  const { name, address } = useSelector<InitialState, StateProps>(
    (state: InitialState) => {
      return {
        name: state.name,
        address: state.address,
      };
    }
  );

  const dispatch = useDispatch();
  const rootDispatcher = new RootDispatcher(dispatch);

  return (
    <>
      <div>State Hooks Component - Part 2</div>
      <form>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="address" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default StateHooksComponent;
