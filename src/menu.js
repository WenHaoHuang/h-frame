/*
 * @Author: wenhao.huang
 * @UserId: 18073766
 * @Create: 2020-07-22 16:53:18
 */

export default {
  name: 'HFrameMenu',
  props: {
    menuList: {
      type: Array,
      default: () => []
    },
    mode: {
      type: String,
      default: 'vertical'
    },
    defaultActive: {
      type: String,
      default: ''
    }
  },
  render() {
    const {menuList, mode, defaultActive} = this;

    const menuFun = (list, pIndex) => {
      const data = [];
      list.forEach((item, index) => {
        const {name, routerName, path, href, icon, children} = item;
        let menuItem = null;
        const itemIndex = pIndex ? `${pIndex}-${index}` : `${index}`;
        if (children && children.length) {
          // children
          const menuChild = menuFun(children, itemIndex);
          menuItem = (
            <el-submenu index={path || itemIndex}>
              <template slot="title">
                {icon ? <i class={icon} /> : ''}
                <span>{name}</span>
              </template>
              {menuChild}
            </el-submenu>
          );
        } else if (href) {
          menuItem = (
            <a target="_blank" href={href} class="el-menu-item">
              {icon ? <i class={icon} /> : ''}
              <span>{name}</span>
            </a>
          );
        } else {
          menuItem = (
            <el-menu-item index={path || itemIndex} route={routerName || path}>
              {icon ? <i class={icon} /> : ''}
              <span slot="title">{name}</span>
            </el-menu-item>
          );
        }
        data.push(menuItem);
      });
      return data;
    };

    const templateChild = menuFun(menuList);

    return <el-menu mode={mode} defaultActive={defaultActive} router={true} uniqueOpened={true}>{templateChild}</el-menu>;
  }
};
