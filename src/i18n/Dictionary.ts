import { SubTranslationObject } from 'react-redux-i18n'

export type Dictionary = {
  address: string
  emailAddress: string
  getInTouch: string
  getInTouchBody: string
  languageName: string
  phoneNumber: string
  selectLanguage: string
} & SubTranslationObject
