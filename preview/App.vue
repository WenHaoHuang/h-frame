<script>
  import componentDoc from './example.js'
  export default {
    name: 'App',
    components: { componentDoc },
    render(h) {
      const template = h('div', { attrs: { id: 'app' }, class: 'wrapper-demo' }, [
        h('component-doc', {
          props: {
            menuList: [
              { path: '/', name: '首页', icon: 'el-icon-home' }
            ],
            userName: 'HFrame'
          }
        })
      ]);
      return template;
    }
  };
  </script>
