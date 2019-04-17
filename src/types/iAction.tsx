export default interface iAction<T>{
  type: string,
  payload: T,
  error?: boolean,
  meta?: any
}