import { combineReducers } from "redux";
import RxCounter from './RxCounterReducer';
import Todos from './TodoReducer'

export default combineReducers({
  RxCounter,
  Todos
})