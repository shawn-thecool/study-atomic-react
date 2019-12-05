import { configure } from '@storybook/react'
import { addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module)
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
})
