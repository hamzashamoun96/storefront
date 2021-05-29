import { createStore, combineReducers, applyMiddleware } from "redux";
import catReducer from "./categories";
import proReducer from "./product";
import cartReducer from "./cart";
import thunk from 'redux-thunk';

const reducers = combineReducers({ catReducer ,proReducer, cartReducer });

const store = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

export default store();