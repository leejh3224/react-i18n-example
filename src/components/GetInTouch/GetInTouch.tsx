import * as classnames from 'classnames/bind'
import * as React from 'react'
import { Translate } from 'react-redux-i18n'

import { Contacts } from 'components'
import { LanguageSelectorContainer } from 'containers'

import styles from './GetInTouch.sass'

const cx = classnames.bind(styles)

const Contact: React.SFC = () => (
  <div>
    <Translate value="getInTouch" className={cx('title')} />
    <Translate value="getInTouchBody" className={cx('greeting')} />
    <Contacts />
    <div className={cx('divider')} />
    <LanguageSelectorContainer />
  </div>
)

export default Contact
