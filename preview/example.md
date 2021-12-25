:::title

## HFrame 基于 element-ui 的后台管理系统框架快速搭建组件

基于 element-ui 的后台管理系统框架快速搭建组件

:::

### 简单使用

- 组件的简单使用场景

:::demo 通过 config 对组件进行配置

```html
<template>
  <h-frame
    :menu-list="menuList"
    user-name="HFrame"
    default-active="/center/order"
    :theme="theme"
    :command-list="commandList"
    @on-command="onCommand"
  >
    <h-page>template</h-page>
  </h-frame>
</template>

<script>
  export default {
    data() {
      return {
        menuList: [
          { path: "/", name: "我的工作台", icon: "el-icon-s-home" },
          {
            path: "/center",
            name: "处理中心",
            icon: "el-icon-bell",
            children: [
              { path: "/center/message", name: "消息中心" },
              { path: "/center/order", name: "订单管理" }
            ]
          }
        ],
        commandList: [
          { label: '切换主题', command: 'theme', icon: 'el-icon-setting'}
        ],
        theme: 'dark'
      };
    },
    methods: {
      onCommand(command) {
        console.log('command', command)
        if (command === 'theme') {
          this.theme = this.theme === 'light' ? 'dark' : 'light'
          console.log('theme', this.theme)
        }
      }
    }
  };
</script>
```

:::

:::api

### Options

| 名称   | 说明 | 类型   | 可选值 | 默认值 |
| ------ | ---- | ------ | ------ | ------ |
| config | 说明 | object | -      | -      |
