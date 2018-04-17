import * as classnames from 'classnames/bind'
import * as React from 'react'
import { Translate } from 'react-redux-i18n'

import { LanguageList, Modal } from 'components'

import styles from './LanguageSelectModal.sass'

const cx = classnames.bind(styles)

interface IProps {
  isModalVisible: boolean
  toggleModal: () => void
  handleSetLocale: any
  locale: string
}

const languages = [
  {
    code: 'en',
    id: 1,
    name: 'english(US)',
  },
  {
    code: 'ko',
    id: 2,
    name: '한국어',
  },
  {
    code: 'ja',
    id: 3,
    name: '日本語',
  },
]

const LanguageSelectModal: React.SFC<IProps> = ({
  isModalVisible,
  toggleModal,
  handleSetLocale,
  locale,
}) => (
  <React.Fragment>
    {isModalVisible && (
      <Modal handleClose={toggleModal}>
        <div className={cx('container')}>
          <Translate value="selectLanguage" className={cx('title')} />
          <div className={cx('divider')} />
          <LanguageList
            locale={locale}
            languages={languages}
            handleSetLocale={handleSetLocale}
          />
        </div>
      </Modal>
    )}
  </React.Fragment>
)

export default LanguageSelectModal
