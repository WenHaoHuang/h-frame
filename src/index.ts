import Frame from './main.vue'
import Page from './page.vue'

import type { App, Plugin } from 'vue'

export const HFrame: Plugin = {
  install: (app: App): void => {
    app.component(Frame.name, Frame)
    app.component(Page.name, Page)
  },
}

export { Frame, Page }

export default HFrame

export * from './types-main'
export * from './types-page'
