import React from 'react'
import StyledButton from './Button.styled'
import { TYPE } from 'constants/styles'

export const BUTTON_THEME = {
  ...TYPE.THEME,
  ROUNDED: 'ROUNDED'
}
export const BUTTON_COLOR = { ...TYPE.COLOR }
export const BUTTON_SIZE = { ...TYPE.SIZE }

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>
}
Button.defaultProps = {
  theme: BUTTON_THEME.DEFAULT,
  color: BUTTON_COLOR.PRIMARY,
  size: BUTTON_SIZE.MIDDLE,
  children: ''
}

export default Button
