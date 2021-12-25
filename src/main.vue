<template>
  <div
    class="h-frame"
    :class="`theme-${theme}`"
  >
    <div class="h-frame--header">
      <div class="h-frame--logo">
        <slot name="logo">
          {{ title }}
        </slot>
      </div>
      <div
        class="h-frame--header__main"
        :class="{'has-menu': menuPosition === 'top' && hasMenu}"
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
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item
                v-for="(item, index) in levelList"
                :key="index"
              >
                <span
                  v-if="index === levelList.length - 1 || !item.path || (item.meta && item.meta.redirect === true)"
                  class="no-redirect"
                >{{ item.title || item.meta.title }}</span>
                <router-link
                  v-else
                  :to="item.path"
                >
                  {{ item.title || item.meta.title }}
                </router-link>
              </el-breadcrumb-item>
            </el-breadcrumb>
          </slot>
        </div>
        <div class="h-frame--header__side">
          <slot name="header">
            <el-dropdown
              v-if="userName"
              trigger="click"
              @command="onCommand"
            >
              <template slot="default">
                <div class="h-frame--header__user">
                  <el-avatar size="small">
                    {{ userName.slice(0,1) }}
                  </el-avatar>
                  <span class="username-item">{{ userName }}</span>
                  <i class="el-icon-caret-bottom" />
                </div>
              </template>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item, index) in commandList"
                  :key="index"
                  :icon="item.icon"
                  :command="item.command"
                >
                  {{ item.label }}
                </el-dropdown-item>
                <el-dropdown-item
                  :divided="commandList && commandList.length ? true : false"
                  icon="el-icon-switch-button"
                  command="logout"
                >
                  退出登录
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </slot>
        </div>
      </div>
    </div>
    <div class="h-frame--body">
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

<script>
import MenuDefault from './menu.js'

export default {
  name: 'HFrame',
  components: { MenuDefault },
  props: {
    title: {
      type: String,
      default: 'HightDesign',
    },
    menuList: {
      type: Array,
      default: () => [],
    },
    menuPosition: {
      type: String,
      default: 'side',
    },
    defaultActive: {
      type: String,
      default: '',
    },
    commandList: {
      type: Array,
      default: () => [],
    },
    userName: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: 'light'
    }
  },
  computed: {
    hasMenu() {
      return this.menuList && this.menuList.length
    },
    levelList() {
      const matched = this.$route.matched.filter((item) => item.meta && item.meta.title && !item.meta.hideBreadcrumb)
      return matched
    },
  },
  methods: {
    onCommand(command) {
      this.$emit('on-command', command)
    },
  },
}
</script>
