import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type InformationType = {
  date: string,
  type: string,
  location: {
    address: string,
    number: string,
    district: string,
    city: string,
    stateLocal: string,
    country: string,
  }
  id?: number;
};

export type ReduxState = {
  isFetching: boolean,
  information: InformationType,
  errorMessage: string,
};

export type DispatchType = ThunkDispatch<ReduxState, null, AnyAction>;
