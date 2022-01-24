import Frame from './main.vue'
import Page from './page.vue'

import type { App, Plugin } from 'vue'

const HFrame: Plugin = {
  install: (app: App) => {
    app.component(Frame.name, Frame)
    app.component(Page.name, Page)
  },
}

export { Page, Frame }

export default HFrame

export * from './page'
export * from './main'
