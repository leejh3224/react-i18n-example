import languageSelectModal, {
  ILanguageSelectModal,
} from 'data/languageSelectModal/reducer'
import { i18nReducer } from 'react-redux-i18n'
import { combineReducers } from 'redux'

export interface IAppState {
  i18n: typeof i18nReducer
  languageSelectModal: ILanguageSelectModal
}

export default combineReducers({
  i18n: i18nReducer,
  languageSelectModal,
})
