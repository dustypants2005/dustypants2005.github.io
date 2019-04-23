import iTodo from "../types/iTodo"

export const CREATE_TODO = 'CREATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const GET_ALL_TODOS = 'GET_ALL_TODOS'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SAVE_TODOS = 'SAVE_TODOS'
export const LOAD_TODOS = 'LOAD_TODOS'
export const TODOS = 'TODOS'

export const CreateTodo = (payload: string) => ({
  type: CREATE_TODO,
  payload
})

export const DeleteTodo = (payload: number) => ({
  type: DELETE_TODO,
  payload
})

export const GetAllTodos = () => ({
  type: GET_ALL_TODOS
})

export const ToggleTodo = (payload: number) => ({
  type: TOGGLE_TODO,
  payload
})

export const SaveTodos = (payload: iTodo[]) => ({
  type: SAVE_TODOS,
  payload
})

export const LoadTodos = () => ({
  type: LOAD_TODOS
})

