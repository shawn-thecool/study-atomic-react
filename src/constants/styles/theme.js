import { css } from 'styled-components'

export const COMM_THEME_CSS = {
  DEFAULT: css``,
  BORDER: css`
    border: 1px solid #333;
  `,
  WIRE: css`
    display: table;
    background: linear-gradient(
        to top right,
        transparent calc(50% - 1px),
        rgb(210, 210, 210) calc(50% - 1px),
        rgb(210, 210, 210) calc(50% + 1px),
        transparent calc(50% + 1px)
      ),
      linear-gradient(
        to bottom right,
        transparent calc(50% - 1px),
        rgb(210, 210, 210) calc(50% - 1px),
        rgb(210, 210, 210) calc(50% + 1px),
        transparent calc(50% + 1px)
      );
    background-color: #333;
  `,
  SHADOW: css`
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.3);
  `
}

export const COMM_THEME_TYPE = {
  DEFAULT: 'DEFAULT',
  BORDER: 'BORDER',
  WIRE: 'WIRE',
  SHADOW: 'SHADOW'
}
