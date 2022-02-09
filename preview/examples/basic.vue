<template>
  <h-frame
    :menu-list="menuList"
    :menu-position="menuPostion"
    :default-active="defaultActive"
    :command-list="commandList"
    :user-name="userName"
    :theme="theme"
    @on-command="onCommandFrame"
  >
    <template #breadcrumb>
      <el-breadcrumb v-if="levelList.length">
        <el-breadcrumb-item
          v-for="(item, index) in levelList"
          :key="index"
          :to="(index === levelList.length - 1 || !item.path || (item.meta && item.meta.redirect === true)) ? undefined : item"
        >
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <template #default>
      <h-page
        breadcrumb
        :commands="commands"
        @on-command="onCommand"
      >
        <div>主体内容</div>
        <p>主体内容</p>
        <p>主体内容</p>
        <p>主体内容</p>
        <p>主体内容</p>
        <div>主体内容</div>
        <p>主体内容</p>
        <p>主体内容</p>
        <p>主体内容</p>
        <p>主体内容</p>
        <div>主体内容</div>
        <p>主体内容</p>
        <p>主体内容</p>
        <p>主体内容</p>
        <p>主体内容</p>
      </h-page>
    </template>
  </h-frame>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  shallowRef
} from 'vue'
import {
  Edit,
  Delete,
  Plus,
  DataLine,
  Connection,
  PictureFilled,
  QuestionFilled,
  Promotion,
  Tools,
  Setting,
} from '@element-plus/icons-vue'

export default defineComponent({
  setup() {
    const levelList = ref([
      {
        name: 'home',
        path: '/home',
        meta: {
          title: '首页'
        }
      },
      {
        name: 'list',
        path: '/list',
        meta: {
          title: '列表'
        }
      },
      {
        name: 'detail',
        path: '/detail',
        meta: {
          title: '详情',
          redirect: true
        }
      }
    ])
    const menuList = shallowRef([
      {
        name: '告警管理',
        icon: DataLine,
        path: '/demo/alarm',
        children: [
          { name: '告警列表', path: '/demo/alarm/list/index' },
          { name: '异常管理', path: '/demo/alarm/unusual' },
          { name: '用户组配置', path: '/demo/alarm/user-group-config' },
          {
            name: '推送策略',
            path: '/demo/alarm/policy',
            children: [{ name: '定时推送', path: '/demo/alarm/policy/11' }, { name: '立即推送', path: '/222', children: [{ name: '周期推送', path: '/333' }] }],
          },
        ],
      },
      { name: '系统管理', path: '/demo/system', icon: Tools, children: [{ name: '异常管理', path: '/demo/system/unusual' }] },
      { name: '管理', icon: Setting, path: '/page' },
    ])
    const commandList = shallowRef([
      { label: '切换主题', icon: PictureFilled, command: 'theme' },
      { label: '帮助文档', icon: QuestionFilled, command: 'help' },
      { label: '快速指南', icon: Promotion, command: 'promotion' }
    ])
    const commands = shallowRef([
      {
        command: "edit",
        label: "编辑",
        props: {
          type: "default",
          icon: Edit
        }
      },
      {
        command: "delete",
        label: "删除",
        props: {
          type: "default",
          icon: Delete
        }
      },
      {
        command: "create",
        label: "新建",
        props: {
          type: "primary",
          icon: Plus
        },
        on: {
          click: () => {
            console.log("点击了", "create")
          }
        }
      }
    ])
    const theme = ref('dark')
    const onCommandFrame = (cmd: string) => {
      if (cmd === 'theme') {
        theme.value = theme.value === 'dark' ? 'light' : 'dark'
      }
    }
    const onCommand = (cmd: string, item) => {
      console.log(cmd, item)
    }

    return {
      levelList,
      menuList,
      commandList,
      commands,
      menuPostion: 'top',
      defaultActive: '/demo/alarm/policy/11',
      userName: '李诗情',
      theme,
      onCommandFrame,
      onCommand
    }
  },
})
</script>
