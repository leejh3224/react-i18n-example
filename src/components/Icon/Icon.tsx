import * as React from 'react'

interface IProps {
  animation?: string
  color?: string
  name: 'address' | 'arrowDown' | 'check' | 'emailAddress' | 'phoneNumber'
}

const icons = {
  address: () => (
    <React.Fragment>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </React.Fragment>
  ),
  arrowDown: () => (
    <React.Fragment>
      <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
      <path d="M0-.75h24v24H0z" fill="none" />
    </React.Fragment>
  ),
  check: () => (
    <React.Fragment>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
    </React.Fragment>
  ),
  emailAddress: () => (
    <React.Fragment>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
    </React.Fragment>
  ),
  phoneNumber: () => (
    <React.Fragment>
      <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </React.Fragment>
  ),
}

const Icon: React.SFC<IProps> = ({ animation, color = '#000', name }) => {
  return (
    name && (
      <svg
        fill={color}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        className={animation}
      >
        {icons[name]()}
      </svg>
    )
  )
}

export default Icon
