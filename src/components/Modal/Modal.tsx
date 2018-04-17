import * as classnames from 'classnames/bind'
import * as React from 'react'

import styles from './Modal.sass'

const cx = classnames.bind(styles)

interface IProps {
  handleClose: () => void
}

const Modal: React.SFC<IProps> = ({ children, handleClose }) => (
  <React.Fragment>
    <div className={cx('modal')}>
      <div className={cx('body')}>{children}</div>
    </div>
    <div className={cx('background')} onClick={handleClose} />
  </React.Fragment>
)

export default Modal
