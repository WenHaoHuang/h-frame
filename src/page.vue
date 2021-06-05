<template>
  <div
    class="h-page"
    :class="{'is-bottom': showCommandFoot}"
    :style="style"
  >
    <el-scrollbar
      wrap-style="overflowX:hidden;"
      style="height:100%;"
    >
      <div
        v-if="showHeader"
        class="h-page__header"
      >
        <div
          v-if="breadcrumb"
          class="h-page__breadcrumb"
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
        <div
          v-if="showCommandHead"
          class="h-page__command"
        >
          <slot name="command">
            <el-button
              v-for="command in commands"
              :key="command.command"
              v-bind="command.props"
              v-on="command.on"
              @click="() => {onCommand(command.command, command)}"
            >
              {{ command.label }}
            </el-button>
          </slot>
        </div>
      </div>
      <div class="h-page__main">
        <div
          class="h-page__wrap"
          :class="wrapClass"
          :style="styleWrap"
        >
          <slot />
        </div>
      </div>
      <div
        v-if="showCommandFoot"
        class="h-page__footer"
      >
        <slot name="command">
          <el-button
            v-for="command in commands"
            :key="command.command"
            v-bind="command.props"
            v-on="command.on"
            @click="() => {onCommand(command.command, command)}"
          >
            {{ command.label }}
          </el-button>
        </slot>
      </div>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  name: 'HPage',
  props: {
    backgroundColor: {
      type: String,
      default: undefined,
    },
    padding: {
      type: String,
      default: '20px',
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
      type: Array,
      default: () => [],
    },
    isBottom: {
      type: Boolean,
      default: () => {},
    },
    wrapClass: {
      type: String,
      default: '',
    },
  },
  computed: {
    style() {
      const data = {}
      if (this.backgroundColor) {
        data.backgroundColor = this.backgroundColor
      }
      return data
    },
    styleWrap() {
      const data = {}
      if (this.padding) {
        data.padding = this.padding
      }
      if (this.gap !== 20) {
        data.gridGap = `${this.gap}px`
      }
      return data
    },
    levelList() {
      const matched = this.$route.matched.filter((item) => item.meta && item.meta.title && !item.meta.hideBreadcrumb)
      return matched
    },
    showHeader() {
      return this.breadcrumb || this.showCommandHead
    },
    showCommand() {
      const hasCommands = this.commands && this.commands.length
      const hasSlot = this.$slots.command || this.$scopedSlots.command
      return hasCommands || hasSlot
    },
    showCommandHead() {
      return this.showCommand && !this.isBottom
    },
    showCommandFoot() {
      return this.showCommand && this.isBottom
    },
  },
  methods: {
    onCommand(command, item) {
      this.$emit('on-command', command, item)
    },
  },
}
</script>
