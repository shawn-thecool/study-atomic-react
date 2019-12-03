import styled, { css } from 'styled-components'

const CSS_THEME = {
  DEFAULT: css`
    border: 1px solid #fff;
  `,
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

const CSS_BASE = css`
  display: inline-block;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 50px;
  box-sizing: border-box;
`
const getCss = ({ theme, color, style }) => {
  const themeCss = CSS_THEME[theme] || CSS_THEME.DEFAULT
  const colorCss = CSS_COLOR[color] || CSS_COLOR.PRIMARY
  return css`
    ${CSS_BASE}
    ${themeCss}
    ${colorCss}
    ${style}
  `
}

const StyledDiv = styled.div`
  ${getCss}
`

export default StyledDiv
