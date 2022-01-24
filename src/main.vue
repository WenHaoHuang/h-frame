<template>
  <div :class="['h-frame', `theme-${theme}`]">
    <div class="h-frame--header">
      <div class="h-frame--logo">
        <slot name="logo">
          {{ title }}
        </slot>
      </div>
      <div
        class="h-frame--header__main"
        :class="{ 'has-menu': menuPosition === 'top' && hasMenu }"
      >
        <div
          v-if="menuPosition === 'top' && hasMenu"
          class="h-frame--header__menu"
        >
          <slot name="menu">
            <menu-default
              :menu-list="menuList"
              mode="horizontal"
              :default-active="defaultActive"
            />
          </slot>
        </div>
        <div
          v-else
          class="h-frame--header__breadcrumb"
        >
          <slot name="breadcrumb">
            <el-breadcrumb v-if="levelList.length">
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
        <div class="h-frame--header__side">
          <slot name="side" />
          <slot name="header">
            <el-dropdown
              v-if="userName"
              trigger="click"
              @command="onCommand"
            >
              <template #default>
                <div class="h-frame--header__user">
                  <el-avatar size="small">
                    {{ userName.slice(0, 1) }}
                  </el-avatar>
                  <span class="username-item">{{ userName }}</span>
                  <i>
                    <svg
                      class="icon"
                      width="14"
                      height="14"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      data-v-042ca774=""
                    >
                      <path
                        fill="currentColor"
                        d="M192 384l320 384 320-384z"
                      />
                    </svg>
                  </i>
                </div>
              </template>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    v-for="(item, index) in commandList"
                    :key="index"
                    :icon="item.icon"
                    :command="item.command"
                  >
                    {{ item.label }}
                  </el-dropdown-item>
                  <el-dropdown-item
                    :divided="commandList?.length ? true : false"
                    :icon="SwitchButton"
                    command="logout"
                  >
                    退出登录
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </slot>
        </div>
      </div>
    </div>
    <div :class="['h-frame--body', {'is-fullscreen': menuPosition !== 'side' || !hasMenu}]">
      <div
        v-if="menuPosition === 'side' && hasMenu"
        class="h-frame--side"
      >
        <slot name="menu">
          <el-scrollbar
            wrap-style="overflowX:hidden;"
            style="height:100%;"
          >
            <menu-default
              :menu-list="menuList"
              :default-active="defaultActive"
            />
          </el-scrollbar>
        </slot>
      </div>
      <div class="h-frame--main">
        <slot />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  computed,
  getCurrentInstance,
} from 'vue'
import type { RouteLocation } from 'vue-router'
import { frameProps, frameEmits } from './main'
import MenuDefault from './menu-default.jsx'
import { SwitchButton, CaretBottom } from '@element-plus/icons-vue'

import './style/index.scss'

export default defineComponent({
  name: 'HFrame',
  components: {
    MenuDefault
  },

  props: frameProps,
  emits: frameEmits,

  setup(props, context) {
    // eslint-disable-next-line
    const instance = getCurrentInstance()!
    const route = instance.appContext.config.globalProperties.$route as RouteLocation
    const hasMenu = computed(() => props.menuList?.length)
    const levelList = computed(() => {
      if (!route) {
        return []
      }
      const matched = route.matched.filter((item) => item.meta && item.meta.title && !item.meta.hideBreadcrumb)
      return matched
    })

    const onCommand = (command) => {
      context.emit('on-command', command)
    }

    return {
      SwitchButton,
      CaretBottom,
      hasMenu,
      levelList,
      onCommand
    }
  }
})
</script>
