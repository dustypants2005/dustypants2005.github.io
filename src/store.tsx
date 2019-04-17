import { createStore } from "redux";
import reducers from './reducers'

const w = window as any

const store = createStore(
  reducers,
  w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__()
  )

export default store