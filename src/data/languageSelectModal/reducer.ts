import { createVisibilityReducer } from 'data/factory'
import { Map } from 'immutable'
import { combineReducers } from 'redux-immutable'

export interface ILanguageSelectModal extends Map<any, any> {
  isVisible: boolean
}

export default combineReducers({
  isVisible: createVisibilityReducer('languageSelectModal'),
})
