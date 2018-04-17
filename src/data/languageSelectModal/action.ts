import { ActionsUnion } from 'data/types'
import { createAction } from 'data/utils'

import { languageSelectModal } from 'data/actionTypes'

export const actions = {
  toggleLanguageSelectModal: () =>
    createAction(languageSelectModal.SET_VISIBILITY),
}

export type Actions = ActionsUnion<typeof actions>
