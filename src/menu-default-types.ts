import { buildProp, buildProps, definePropType } from './utils/props'
import type { ExtractPropTypes } from './utils/types'
import { mutable } from './utils/props'

export type MenuItem = {
  name: string
  path: string
  href?: string
  routerName?: string
  children?: Array<MenuItem>
}

export const menuProps = buildProps({
  mode: buildProp({
    type: String,
    values: ['vertical', 'horizontal'],
    default: 'vertical',
  } as const),
  defaultActive: {
    type: String,
    default: '',
  },
  menuList: {
    type: definePropType<MenuItem[]>(Array),
    default: () => mutable([] as const),
  }
} as const)

export type MenuProps = ExtractPropTypes<typeof menuProps>
