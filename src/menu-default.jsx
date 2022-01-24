import { defineComponent } from 'vue'
import { menuProps } from './menu-default-types'
import HgIcon from './icon.vue'
import HgPage from './page.vue'

export default defineComponent({
  name: 'HFrameMenu',
  components: { HgIcon, HgPage },

  props: menuProps,

  setup(props) {
    const menuFunc = (list, pIndex = 0) => {
      const data = []
      list.forEach((item, index) => {
        const { name, routerName, path, href, icon, children } = item
        let menuItem = null
        const itemIndex = pIndex ? `${pIndex}-${index}` : `${index}`
        if (children && children.length) {
          // children
          const menuChild = menuFunc(children, itemIndex)
          menuItem = (
            <el-sub-menu
              index={path || itemIndex}
              v-slots={{
                title: () => ([
                  ...[icon ? [<HgIcon icon={icon} />] : []],
                  <span>{name}</span>
                ]),
                default: () => (menuChild)
              }}
            />
          )
        } else if (href) {
          menuItem = (
            <a target="_blank" href={href} class="el-menu-item">
              {icon ? <HgIcon icon={icon} /> : ''}
              <span>{name}</span>
            </a>
          )
        } else {
          menuItem = (
            <el-menu-item index={path ?? itemIndex} route={routerName ?? path}>
              {icon ? <HgIcon icon={icon} /> : ''}
              <span>{name}</span>
            </el-menu-item>
          )
        }
        data.push(menuItem)
      })
      return data
    }
    const templateChild = menuFunc(props.menuList)
    return {
      templateChild,
    }
  },
  render() {
    return (
      <el-menu
        class="h-frame--menu"
        mode={this.mode}
        defaultActive={this.defaultActive}
        router={true}
        uniqueOpened={true}
      >
        {this.templateChild}
      </el-menu>
    )
  },
})
