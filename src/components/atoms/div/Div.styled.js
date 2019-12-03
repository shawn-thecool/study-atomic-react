import styled, { css } from 'styled-components'

const CSS_THEME = {
  DEFAULT: ({ customCss }) =>
    css`
      display: block;
      font-size: 16px;
      font-weight: bold;
      ${customCss}
    `
}

const baseStyle = {}

const getTheme = ({ theme, ...rest }) => {
  const themeCss = CSS_THEME[theme] || CSS_THEME.DEFAULT
  const cssParam = {
    customCss: css`
      ${baseStyle}
      ${rest}
    `
  }
  return themeCss(cssParam)
}

const StyledDiv = styled.div`
  ${getTheme}
`

export default StyledDiv
