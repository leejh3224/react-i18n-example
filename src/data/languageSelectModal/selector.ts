import { ILanguageSelectModal } from './reducer'

export const getIsVisible = (state: ILanguageSelectModal) =>
  state.get('isVisible')
