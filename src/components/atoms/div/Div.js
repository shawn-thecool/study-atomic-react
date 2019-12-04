import React from 'react'
import StyledDiv from './Div.styled'
import { TYPE } from 'constants/styles'

export const DIV_THEME = { ...TYPE.THEME }
export const DIV_COLOR = { ...TYPE.COLOR }
export const DIV_SIZE = { ...TYPE.SIZE }

function Div({ children, ...rest }) {
  return <StyledDiv {...rest}>{children}</StyledDiv>
}
Div.defaultProps = {
  theme: DIV_THEME.DEFAULT,
  color: DIV_COLOR.PRIMARY,
  size: DIV_SIZE.MIDDLE,
  children: ''
}

export default Div
