import * as classnames from 'classnames/bind'
import * as React from 'react'

import { Icon } from 'components'

import styles from './LanguageList.sass'

const cx = classnames.bind(styles)

interface ILanguage {
  code: string
  id: number
  name: string
}

interface IProps {
  languages: ILanguage[]
  handleSetLocale: () => void
  locale: string
}

const LanguageList: React.SFC<IProps> = ({
  languages,
  handleSetLocale,
  locale,
}) => (
  <ul className={cx('list')}>
    {languages.map(({ code, id, name }) => {
      return (
        <li
          key={id}
          className={cx('item')}
          data-language-code={code}
          onClick={handleSetLocale}
        >
          <p className={cx('text')}>{name}</p>
          {locale === code && (
            <Icon name="check" color="hsla(130, 71%, 49%, 1)" />
          )}
        </li>
      )
    })}
  </ul>
)

export default LanguageList
