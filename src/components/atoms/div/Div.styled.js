import styled, { css } from 'styled-components'

const CSS_BASE = css`
  box-sizing: border-box;
`
const CSS_THEME = {
  DEFAULT: css``,
  BORDER: css`
    border: 1px solid #333;
  `
}
const CSS_COLOR = {
  PRIMARY: css`
    background-color: #007bff;
    color: #fff;
  `,
  SECONDARY: css`
    background-color: #6c757d;
    color: #fff;
  `,
  SUCCESS: css`
    background-color: #28a745;
    color: #fff;
  `,
  DANGER: css`
    background-color: #17a2b8;
    color: #fff;
  `,
  WARING: css`
    background-color: #ffc107;
    color: #fff;
  `,
  INFO: css`
    background-color: #dc3545;
    color: #fff;
  `,
  LIGHT: css`
    background-color: #f8f9fa;
    color: #333;
  `,
  DARK: css`
    background-color: #343a40;
    color: #fff;
  `
}
const CSS_SIZE = {
  SMALL: css`
    width: 100px;
    height: 100px;
  `,
  MIDDLE: css`
    width: 200px;
    height: 200px;
  `,
  BIG: css`
    width: 300px;
    height: 300px;
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
const StyledDiv = styled.div`
  ${getCss}
`

export default StyledDiv
