import styled, { css } from 'styled-components'
import { CSS } from 'constants/styles'

const CSS_BASE = css`
  box-sizing: border-box;
`
const CSS_THEME = { ...CSS.THEME }
const CSS_COLOR = { ...CSS.COLOR }
const CSS_SIZE = { ...CSS.SIZE }

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
const StyledDiv = styled.div`
  ${getCss}
`

export default StyledDiv
