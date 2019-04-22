import { INCREMENT, DECREMENT, SAVE, LOAD, COUNTER } from "../actions/CounterAction";
import iAction from "../types/iAction";

const initialState: number = 0

export default (state = initialState, { type, payload }: iAction<null | number>) => {
  switch (type) {

  case INCREMENT:
    return ++state

  case DECREMENT:
    return --state

  case SAVE:
    if(payload !== null) {
      localStorage.setItem(COUNTER, state.toString())
    }
    return state

  case LOAD:
    return Number(localStorage.getItem(COUNTER))

  default:
    return state
  }
}