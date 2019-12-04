import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, optionsKnob } from '@storybook/addon-knobs'
import Div, { DIV_SIZE, DIV_THEME, DIV_COLOR } from './Div'

const stories = storiesOf('Components|Atoms/Div', module)
const indexComp = () =>
  Object.values(DIV_THEME).map((theme, themeIdx) => (
    <Fragment key={`div-index-theme-${themeIdx}`}>
      <strong>{theme}</strong>
      <hr></hr>
      <div style={{ padding: '20px 0' }}>
        {Object.values(DIV_COLOR).map((color, colorIdx) => (
          <Div
            key={`div-index-color-${colorIdx}`}
            theme={theme}
            color={color}
            size={DIV_SIZE.SMALL}
            style={{ display: 'inline-block', margin: '10px', textAlign: 'center', lineHeight: '50px' }}
          >
            <div>{theme}</div>
            <div>{color}</div>
          </Div>
        ))}
      </div>
    </Fragment>
  ))
const themeComp = () => (
  <Div 
    theme={optionsKnob('THEME', DIV_THEME, DIV_THEME.DEFAULT, { display: 'select' }, '')}
    color={optionsKnob('COLOR', DIV_COLOR, DIV_COLOR.PRIMARY, { display: 'select' }, '')}
    size={optionsKnob('SIZE', DIV_SIZE, DIV_SIZE.MIDDLE, { display: 'select' }, '')}
    style={{display: 'inline-block', textAlign: 'center', lineHeight: '50px'}}
  >
    {text('Text', `DIV`)}
  </Div>
)

stories
  .addDecorator(withKnobs)
  .add('Index', indexComp)
  .add('Theme', themeComp)
