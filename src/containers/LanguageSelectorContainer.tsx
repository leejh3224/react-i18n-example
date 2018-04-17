import { LanguageSelector } from 'components'
import { actions } from 'data/languageSelectModal/action'
import { IAppState } from 'data/rootReducer'
import { getCurrentLocale } from 'data/utils'
import { connect } from 'react-redux'
import { setLocale } from 'react-redux-i18n'
import { compose, withHandlers } from 'recompose'

const mapStateToProps = (state: IAppState) => ({
  isModalVisible: state.languageSelectModal.get('isVisible'),
  locale: getCurrentLocale(state),
})

const mapDispatchToProps = {
  setLocale,
  toggleModal: actions.toggleLanguageSelectModal,
}

export interface IPropsFromState {
  isModalVisible: boolean
  locale: string
}

export interface IPropsFromDispatch {
  setLocale: (locale: string) => void
  toggleModal: () => void
}

export interface IReduxProps extends IPropsFromState, IPropsFromDispatch {}

export interface IWithHandlers {
  handleSetLocale: (props: any) => (event: any) => void
}

export default compose(
  connect<IPropsFromState, IPropsFromDispatch>(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withHandlers({
    handleSetLocale: (props: IReduxProps) => (
      event: React.MouseEvent<HTMLLIElement>,
    ) => {
      const languageCode =
        event.currentTarget.getAttribute('data-language-code') || ''

      props.setLocale(languageCode)
      props.toggleModal()
    },
  }),
)(LanguageSelector)
