import * as actionTypes from 'data/actionTypes'
import { createReducer } from 'data/utils'

const createVisibilityReducer = (namespace: string) => {
  const initialState = false
  const target = actionTypes[namespace]

  return createReducer(
    {
      [target.SET_VISIBILITY](state: typeof initialState) {
        return !state
      },
    },
    initialState,
  )
}

export default createVisibilityReducer
