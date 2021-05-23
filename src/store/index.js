import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./buy";

const reducers = combineReducers({ reducer1: reducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();