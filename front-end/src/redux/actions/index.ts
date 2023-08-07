import { InformationType } from "../../types";

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export function requestStarted() {
  return { type: REQUEST_STARTED };
}

export function requestSuccessful(information: InformationType | InformationType[]) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: information,
  };
}

export function requestFailed(errorMessage: string) {
  return {
    type: REQUEST_FAILED,
    payload: errorMessage,
  };
}
