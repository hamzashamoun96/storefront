import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import catReducer from "./categories";
import proReducer from "./product";
import cartReducer from "./cart";

const reducers = combineReducers({ catReducer ,proReducer, cartReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();