import * as classnames from 'classnames/bind'
import * as React from 'react'

import { GetInTouch } from 'components'

import styles from './Home.sass'

const cx = classnames.bind(styles)

const Home: React.SFC = () => (
  <main className={cx('main')}>
    <GetInTouch />
  </main>
)

export default Home
