import React from 'react'
import StyledDiv from './Div.styled'

export const DIV_SIZE = {
  SMALL: 'SMALL',
  MIDDLE: 'MIDDLE',
  BIG: 'BIG'
}

export const DIV_THEME = {
  DEFAULT: 'DEFAULT',
  BORDER: 'BORDER'
  // LINE: 'LINE',
  // WIRE: 'WIRE',
  // DIVIDER: 'DIVIDER',
  // SHADOW: 'SHADOW',
  // BOX: 'BOX'
}

export const DIV_COLOR = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  SUCCESS: 'SUCCESS',
  DANGER: 'DANGER',
  WARING: 'WARING',
  INFO: 'INFO',
  LIGHT: 'LIGHT',
  DARK: 'DARK'
}

export default function Div({ children, ...rest }) {
  return <StyledDiv {...rest}>{children}</StyledDiv>
}

Div.defaultProps = {
  theme: DIV_THEME.DEFAULT,
  color: DIV_COLOR.PRIMARY,
  children: ''
}
