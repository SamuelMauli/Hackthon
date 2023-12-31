import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import informationReducer from './reducers';

const store = createStore(
  informationReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
