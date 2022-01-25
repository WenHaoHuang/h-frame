// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    HFrame: typeof import('@hg-ui/h-frame')['Frame']
    HPage: typeof import('@hg-ui/h-frame')['Page']
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {}
}

export {}
