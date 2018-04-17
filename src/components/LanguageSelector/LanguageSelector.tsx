import * as classnames from 'classnames/bind'
import * as React from 'react'
import { Translate } from 'react-redux-i18n'

import { Icon, LanguageSelectModal } from 'components'
import {
  IReduxProps,
  IWithHandlers,
} from 'containers/LanguageSelectorContainer'

import styles from './LanguageSelector.sass'

const cx = classnames.bind(styles)

interface IProps extends IReduxProps, IWithHandlers {}

const LanguageSelector: React.SFC<IProps> = ({
  isModalVisible,
  toggleModal,
  handleSetLocale,
  locale,
}) => (
  <div className={cx('container')}>
    <LanguageSelectModal
      isModalVisible={isModalVisible}
      toggleModal={toggleModal}
      handleSetLocale={handleSetLocale}
      locale={locale}
    />
    <button className={cx('language-selector')} onClick={toggleModal}>
      <Translate value="languageName" className={cx('text')} />
      <div className={cx({ 'arrow-up': isModalVisible })}>
        <Icon name="arrowDown" />
      </div>
    </button>
  </div>
)

export default LanguageSelector
