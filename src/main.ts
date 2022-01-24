import { buildProp, buildProps, definePropType } from './utils/props'

import type { ExtractPropTypes } from './utils/types'
import { mutable } from './utils/props'
import type { RouteRecordNormalized } from 'vue-router'
import type { Component } from 'vue'

export type ElDropdownItem = {
  command: string
  icon: string | Component
  label: string
}

export type ElDropdown = ElDropdownItem[]

export const frameProps = buildProps({
  theme: buildProp({
    type: String,
    values: ['light', 'dark'],
    default: 'light',
  } as const),
  title: {
    type: String,
    default: 'HightDesign',
  },
  menuPosition: buildProp({
    type: String,
    values: ['side', 'top'],
    default: 'side',
  } as const),
  menuList: {
    type: Array,
    default: () => [],
  },
  defaultActive: {
    type: String,
    default: '',
  },
  commandList: {
    type: definePropType<ElDropdown>(Array),
    default: () => mutable([] as const),
  },
  userName: {
    type: String,
    default: '',
  }
} as const)

export const frameEmits = {
  'on-command': (cmd: string) => typeof cmd === 'string',
}

export type FrameProps = ExtractPropTypes<typeof frameProps>

export type LevelList = RouteRecordNormalized
