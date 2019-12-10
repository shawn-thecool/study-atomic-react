import styled, { css } from 'styled-components'
import { CSS } from 'constants/styles'

const CSS_BASE = css`
  box-sizing: border-box;
`
const CSS_THEME = {
  ...CSS.THEME,
  ROUNDED: css`
    border-radius: 10px;
  `
}
const CSS_COLOR = { ...CSS.COLOR }
const CSS_SIZE = {
  SMALL: css`
    width: 120px;
    height: 50px;
  `,
  MIDDLE: css`
    width: 170px;
    height: 60px;
  `,
  BIG: css`
    width: 240px;
    height: 70px;
  `
}

const getCss = ({ theme, color, size, style }) => {
  const themeCss = CSS_THEME[theme] || CSS_THEME.DEFAULT
  const colorCss = CSS_COLOR[color] || CSS_COLOR.PRIMARY
  const sizeCss = CSS_SIZE[size] || CSS_SIZE.SMALL
  return css`
    ${CSS_BASE}
    ${sizeCss}
    ${themeCss}
    ${colorCss}
    ${style}
  `
}
const StyledButton = styled.button`
  ${getCss}
`

export default StyledButton
