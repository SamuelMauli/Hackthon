import { InformationType } from "../../types";
import { ADD_INFORMATION, DELETE_INFORMATION } from "../actions/add-claim";
import { LIST_CLAIMS } from "../actions/list-claims";
// import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED  } from "../actions";
import { AnyAction } from "redux";

const INITIAL_STATE: InformationType[] = [];

const informationReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ADD_INFORMATION: {      
      return [...state, action.payload]
    }
    case DELETE_INFORMATION: {
      return [...state, action.payload]
    }
    case LIST_CLAIMS: {
      return [...state, ...action.payload]
    }

    // case REQUEST_STARTED:
    //   return {
    //     ...state,
    //   };

    // case REQUEST_SUCCESSFUL:
    //   return {
    //     ...state,
    //   };

    // case REQUEST_FAILED:
    //   return {
    //     ...state,
    //     errorMessage: action.payload,
    //   };
    default:
      return state;
  }
}

export default informationReducer;
