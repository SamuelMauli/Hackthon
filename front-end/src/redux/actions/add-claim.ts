import { requestStarted, requestSuccessful, requestFailed } from '.';
import { InformationType } from '../../types';
import { DispatchType } from '../../types';

export const ADD_INFORMATION = 'ADD_INFORMATION';
export const DELETE_INFORMATION = 'DELETE_INFORMATION';

export const addClaim = (claimData: InformationType) => {
  return ({
  type: ADD_INFORMATION,
  payload: claimData,
})};

export const deleteFormInformation = ({
  date,
  type,
  location: {
    address,
    number,
    district,
    city,
    stateLocal,
    country
  }
}: InformationType) => ({
  type: DELETE_INFORMATION,
  payload: {
      date,
      type,
      location: {
        address,
        number,
        district,
        city,
        stateLocal,
        country
      }
    }
});

export function postDataToApi(claimData: InformationType) {
  return async (dispatch: DispatchType) => {
    try {
      dispatch(requestStarted());
      const response = await fetch('http://localhost:3030/sinistro', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(claimData),
      });
      const data = await response.json();
      dispatch(requestSuccessful(data));
      dispatch(addClaim(data));
    } catch (error) {
      dispatch(requestFailed(error.message));
    }
  }
}