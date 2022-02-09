<template>
  <article :class="['h-page', {'is-bottom': showCommandFoot}]">
    <el-scrollbar
      wrap-style="overflowX:hidden;"
      style="height:100%;"
    >
      <section
        class="h-page--header"
        v-if="showHeader"
      >
        <div
          class="h-page--breadcrumb"
          v-if="breadcrumb"
        >
          <slot name="breadcrumb">
            <el-breadcrumb>
              <el-breadcrumb-item
                v-for="(item, index) in levelList"
                :key="index"
                :to="(index === levelList.length - 1 || !item.path || (item.meta && item.meta.redirect === true)) ? undefined : item"
              >
                {{ item.meta.title }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </slot>
        </div>
        <div
          class="h-page--command"
          v-if="showCommandHead"
        >
          <slot name="command">
            <el-button
              v-for="command in commands"
              :key="command.command"
              v-bind="command.props"
              v-on="{...command.on}"
              @click="() => {onCommand(command.command, command)}"
            >
              {{ command.label }}
            </el-button>
          </slot>
        </div>
      </section>
      <section class="h-page--main">
        <div
          class="h-page--wrap"
          :class="wrapClass"
          :style="styleWrap"
        >
          <slot />
        </div>
      </section>
      <div
        class="h-page--footer"
        v-if="showCommandFoot"
      >
        <slot name="command">
          <el-button
            v-for="command in commands"
            :key="command.command"
            v-bind="command.props"
            v-on="{...command.on}"
            @click="() => {onCommand(command.command, command)}"
          >
            {{ command.label }}
          </el-button>
        </slot>
      </div>
    </el-scrollbar>
  </article>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  getCurrentInstance,
} from 'vue'
import { pageProps, pageEmits } from './types-page'
import type { CommandType, Style } from './types-page'
import type { RouteLocation } from 'vue-router'

import './style/page.scss'

export default defineComponent({
  name: 'HPage',

  props: pageProps,
  emits: pageEmits,

  setup(props, context) {
    // 样式
    const styleWrap = computed(() => {
      const sty: Style = {}
      if (props.padding) {
        sty.padding = props.padding
      }
      if (props.gap !== 20) {
        sty.gridGap = props.gap + 'px'
      }
      return sty
    })
    const showCommand = computed(() => {
      const hasCommands = props.commands?.length
      const hasSlot = context.slots.command
      return hasCommands || hasSlot
    })
    const showCommandHead = computed(() => showCommand.value && !props.isBottom)
    const showCommandFoot = computed(() => showCommand.value && props.isBottom)
    const showHeader = computed(() => props.breadcrumb || showCommandHead.value)
    // 面包屑
    // eslint-disable-next-line
    const instance = getCurrentInstance()!
    const route = instance.appContext.config.globalProperties.$route as RouteLocation
    const levelList = computed(() => {
      if (!route) {
        return []
      }
      const matched = route.matched.filter((item) => item.meta && item.meta.title && !item.meta.hideBreadcrumb)
      return matched
    })
    // 事件触发
    const onCommand = (command: string, item: CommandType) => {
      context.emit('on-command', command, item)
    }

    return {
      styleWrap,
      showCommand,
      showCommandHead,
      showCommandFoot,
      showHeader,
      levelList,
      onCommand
    }
  }
})
</script>
