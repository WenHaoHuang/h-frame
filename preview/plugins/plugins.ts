import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import type Token from 'markdown-it/lib/token'
import type Renderer from 'markdown-it/lib/renderer'

interface ContainerOpts {
  marker?: string | undefined
  validate?(params: string): boolean
  render?(
    tokens: Token[],
    index: number,
    // eslint-disable-next-line
    options: any,
    // eslint-disable-next-line
    env: any,
    self: Renderer
  ): string
}

export const mdPlugin = (md: MarkdownIt) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens, idx) {
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const sourceFileToken = tokens[idx + 2]
        const sourceFile = sourceFileToken?.content ?? ''
        return `<DemoBlock path="${sourceFile}" key="${idx}">`
      } else {
        return '</DemoBlock>'
      }
    },
  } as ContainerOpts)
}
