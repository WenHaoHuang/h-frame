import { buildProps, definePropType } from './utils/props'

import type { ExtractPropTypes } from './utils/types'
import type { ButtonProps } from 'element-plus'

export type CommandType = {
  label: string
  command: string
  props?: ButtonProps
  on?: {
    [key in string]: () => void
  }
}

export const pageProps = buildProps({
  padding: {
    type: String,
    default: '',
  },
  gap: {
    type: Number,
    default: 20,
  },
  breadcrumb: {
    type: Boolean,
    default: false,
  },
  commands: {
    type: definePropType<CommandType[]>(Array),
    default: () => [],
  },
  isBottom: {
    type: Boolean,
    default: false,
  },
  wrapClass: {
    type: String,
    default: '',
  },
} as const)

export const pageEmits = {
  'on-command': (cmd: string, item: CommandType) =>
    typeof cmd === 'string' && item,
}

export type PageProps = ExtractPropTypes<typeof pageProps>

export type Style = {
  padding?: string
  gridGap?: string
}
