import { COMM_THEME_TYPE, COMM_THEME_CSS } from './theme'
import { COMM_COLOR_TYPE, COMM_COLOR_CSS } from './color'
import { COMM_SIZE_TYPE, COMM_SIZE_CSS } from './size'

export const TYPE = {
  THEME: COMM_THEME_TYPE,
  COLOR: COMM_COLOR_TYPE,
  SIZE: COMM_SIZE_TYPE
}

export const CSS = {
  THEME: COMM_THEME_CSS,
  COLOR: COMM_COLOR_CSS,
  SIZE: COMM_SIZE_CSS
}

const STYLE = {
  TYPE,
  CSS
}

export default STYLE
