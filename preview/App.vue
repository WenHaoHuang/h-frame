<script>
  import componentDoc from './example.js'
  export default {
    name: 'App',
    components: { componentDoc },
    render(h) {
      const template = h('div', { attrs: { id: 'app' }, class: 'wrapper-demo' }, [
        h('div', { class: 'main-cnt' }, [h('component-doc')])
      ]);
      return template;
    }
  };
  </script>
