import { Reducer } from 'redux'
import { IAppState } from './rootReducer'

export function createReducer(
  handlers: any,
  initialState: any,
): Reducer<typeof initialState> {
  return function reducer(state: any = initialState, action: any) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

// createAction
export interface IAction<T extends string> {
  type: T
}

export interface IFSAAction<T extends string, P, M, E> extends IAction<T> {
  payload?: P
  meta?: M
  error?: E
}

export function createAction<T extends string, P, M, E>(
  type: T,
  payload?: P,
  meta?: M,
  error?: E,
): IFSAAction<T, P, M, E> {
  return { type, payload, meta, error }
}

export const createAsyncActionTypes = (namespace: string) => ({
  ERROR: `[${namespace}] error`,
  REQUEST: `[${namespace}] request`,
  SUCCESS: `[${namespace}] success`,
})

// TODO: react-redux-i18n doesn't provide selector for current locale
export const getCurrentLocale = (state: IAppState) => (state.i18n as any).locale
