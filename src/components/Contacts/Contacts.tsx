import * as classnames from 'classnames/bind'
import * as React from 'react'
import { Translate } from 'react-redux-i18n'

import { Icon } from 'components'

import styles from './Contacts.sass'

const cx = classnames.bind(styles)

const contacts = [
  {
    id: 1,
    text: 'leejh3224@naver.com',
    type: 'emailAddress',
  },
  {
    id: 2,
    text: '010-3923-8328',
    type: 'phoneNumber',
  },
  {
    id: 3,
    text: '무학로200 포항학사 301호',
    type: 'address',
  },
]

const Contacts: React.SFC = () => (
  <div>
    {contacts.map(({ id, text, type }: any) => (
      <div className={cx('contact')} key={id}>
        <Icon color="hsla(356, 99%, 62%, 1)" name={type} />
        <Translate value={type} className={cx('text')} />
      </div>
    ))}
  </div>
)

export default Contacts
