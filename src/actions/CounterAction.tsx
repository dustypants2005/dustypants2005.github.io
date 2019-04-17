export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const SAVE = 'SAVE'
export const LOAD = 'LOAD'
export const COUNTER = 'COUNTER'

export const increment = () => {
  return { type: INCREMENT}
}

export const decrement = () => {
  return { type: DECREMENT}
}

export const save = () => {
  return { type: SAVE }
}

export const load = () => {
  return { type: LOAD }
}