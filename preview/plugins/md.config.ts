import path from 'path'
import fs from 'fs'
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
    options: any,
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
        let source = ''
        const sourceFile = sourceFileToken?.content ?? ''
        let sourcePath = ''

        if (sourceFileToken.type === 'inline') {
          sourcePath = path.resolve(__dirname, 'examples', `${sourceFile}.vue`)
          source = fs.readFileSync(sourcePath, 'utf-8')
        }
        if (!source) throw new Error(`Incorrect source file: ${sourcePath}`)
        console.log('source', source, '\n\n\n', sourceFileToken)
        return `<DemoBlock path="${sourceFile}">`
      } else {
        return '</DemoBlock>'
      }
    },
  } as ContainerOpts)
}
