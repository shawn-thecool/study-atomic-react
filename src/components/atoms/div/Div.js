import React from 'react'

const DIV_THEME = {
  DEFAULT: 'DEFAULT'
}

function Div(props) {
  const { children, ...rest } = props

  return <div {...rest}>{children}</div>
}

Div.defaultProps = {
  theme: DIV_THEME.DEFAULT,
  children: ''
}
