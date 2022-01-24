import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import markdown from 'vite-plugin-md'
import { mdPlugin } from './plugins/plugins'
import vueJsx from '@vitejs/plugin-vue-jsx'
// const mdConfig = require('./md.config')

export default defineConfig({
  plugins: [
    vuePlugin({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    markdown({
      markdownItSetup(md) {
        mdPlugin(md)
      },
      wrapperClasses: 'wrapper-preview',
    }),
  ],
  server: {
    port: 8080,
  },
})
