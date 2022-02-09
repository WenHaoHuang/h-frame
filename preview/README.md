## frame

页面框架

### 基础应用

:::demo
basic
:::

### 不同主题

:::demo
theme
:::

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
