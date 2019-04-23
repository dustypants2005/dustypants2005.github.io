import iTodo from '../types/iTodo'
import iAction from '../types/iAction';
import { SAVE_TODOS, CREATE_TODO, DELETE_TODO, TOGGLE_TODO, TODOS, LOAD_TODOS } from '../actions/TodoAction';



const initialState: iTodo[] = []

export default (state = initialState, { type, payload } : iAction<iTodo[] | string | number | null>) => {
  switch (type) {

  case CREATE_TODO:
    if(typeof(payload) === 'string'){
      let newTodo : iTodo = {
        IsCompleted: false,
        Text: payload
      }
      return [...state, newTodo]
    }
    return state

  case DELETE_TODO:
    if(typeof(payload) === 'number'){
      state.splice(payload, 1)
      return [...state]
    }
    return state

  case TOGGLE_TODO:
    if(typeof(payload) === 'number'){
      state.map((todo, i) => {
        if(i === payload)
          todo.IsCompleted = !todo.IsCompleted
      })
      return [...state]
    }
    return state

  case SAVE_TODOS:
    let todos = payload as iTodo[]
    if(todos){
      localStorage.setItem(TODOS, JSON.stringify(todos))
    }
    return state

  case LOAD_TODOS:
    let t = localStorage.getItem(TODOS)
    if(t){
      return JSON.parse(t) as iTodo[]
    }
    return state

  default:
    return state
  }
}
