import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, optionsKnob } from '@storybook/addon-knobs'
import Div, { DIV_THEME, DIV_COLOR } from './Div'

const stories = storiesOf('Components|Atoms/Div', module)

stories
  .addParameters({ info: { inline: true, header: false } })
  .addDecorator(story => <div style={{ margin: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .add('Index', () =>
    Object.values(DIV_THEME).map((theme, themeIdx) =>
      Object.values(DIV_COLOR).map((color, colorIdx) => (
        <Div key={`div-index-${themeIdx + colorIdx}`} theme={theme} color={color}>
          <div>{theme}</div>
          <div>{color}</div>
        </Div>
      ))
    )
  )
  .add('Theme', () => (
    <Div
      theme={optionsKnob('THEME', DIV_THEME, DIV_THEME.DEFAULT, { display: 'select' }, 'TYPE')}
      color={optionsKnob('COLOR', DIV_COLOR, DIV_COLOR.PRIMARY, { display: 'select' }, 'TYPE')}
    >
      {text('Text', `Div`)}
    </Div>
  ))
