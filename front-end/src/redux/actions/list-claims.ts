import { requestFailed, requestStarted, requestSuccessful } from ".";
import { DispatchType } from "../../types";
import { InformationType } from "../../types";

export const LIST_CLAIMS = 'LIST_CLAIMS';

export function getClaims() {
  return async (dispatch: DispatchType) => {
    try {
      dispatch(requestStarted());
      const response = await fetch('http://localhost:3030/sinistro', {
        method: "GET",
      });
      const data = await response.json();
      dispatch(requestSuccessful(data));
      dispatch(listClaims(data));
    } catch (error) {
      dispatch(requestFailed(error.message));
    }
  }
}

export const listClaims = (claimData: InformationType[]) => {
  return ({
  type: LIST_CLAIMS,
  payload: claimData,
})};