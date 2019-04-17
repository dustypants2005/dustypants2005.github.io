import iState from "../types/iState";
import { INCREMENT, DECREMENT, SAVE, LOAD, COUNTER } from "../actions/CounterAction";
import iAction from "../types/iAction";

const initialState: iState = {
  counter: 0
}

export default (state = initialState, { type, payload }: iAction<null | number>) => {
  switch (type) {

  case INCREMENT:
    return { counter: ++state.counter }

  case DECREMENT:
    return { counter: --state.counter }

  case SAVE:
    if(payload !== null) {
      localStorage.setItem(COUNTER, state.counter.toString())
    }
    return { ...state }

  case LOAD:
    return { counter: Number(localStorage.getItem(COUNTER)) }

  default:
    return state
  }
}