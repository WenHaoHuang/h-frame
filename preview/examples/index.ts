import type { App } from 'vue'

const AsyncComp = {
  install: (app: App) => {
    // eslint-disable-next-line
    // @ts-ignore
    const modules = import.meta.globEager('./*.vue')
    Object.keys(modules).forEach(key => {
      const compName = key.replace('./', '').replace('.vue', '')
      const module = modules[key].default
      app.component(`example-${compName}`, module)
    })
  },
}

export default AsyncComp
