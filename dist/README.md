## frame

页面框架

### 基础应用

```
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

```

### 不同主题

```
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
    const theme = ref('light')
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

```

## Frame Attributes

| Attribute      | Description      | Type   | Accepted Values | Default     |
| -------------- | ---------------- | ------ | --------------- | ----------- |
| theme          | 主题配置         | string | dark / light    | light       |
| title          | 网站名称         | string | —               | HightDesign |
| menu-position  | 菜单位置         | string | side / top      | side        |
| menu-list      | 菜单列表         | array  | —               | —           |
| default-active | 默认菜单项       | string | —               | —           |
| command-list   | 下拉菜单         | array  | —               | —           |
| user-name      | 当前登录用户信息 | string | —               | —           |

## Frame Events

| Event Name | Description  | Parameters        |
| ---------- | ------------ | ----------------- |
| on-command | 下拉菜单点击 | (command: string) |

## Frame Slots

| Name       | Description                |
| ---------- | -------------------------- |
| —          | 主体内容                   |
| logo       | 自定义 logo                |
| breadcrumb | 自定义面包屑               |
| side       | 自定义顶部用户信息旁边内容 |
| header     | 自定义顶部用户信息区       |

## Page Attributes

| Attribute  | Description          | Type    | Accepted Values | Default |
| ---------- | -------------------- | ------- | --------------- | ------- |
| padding    | 配置内边距           | string  | —               | 20px    |
| gap        | 布局间隔             | number  | —               | 20      |
| breadcrumb | 是否显示面包屑       | boolean | —               | false   |
| commands   | 操作区按钮配置       | array   | —               | —       |
| isBottom   | 操作区是否展示在底部 | boolean | —               | false   |
| wrapClass  | 内容区样式配置       | string  | —               | —       |

## Page Events

| Event Name | Description  | Parameters                      |
| ---------- | ------------ | ------------------------------- |
| on-command | 下拉菜单点击 | (command: string, item: object) |

## Page Slots

| Name       | Description  |
| ---------- | ------------ |
| —          | 主体内容     |
| breadcrumb | 自定义面包屑 |
| command    | 自定义按钮区 |
