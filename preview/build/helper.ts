// import helper from 'components-helper';
const helper = require('components-helper');

const buildHelper = () => {
  helper({
    name: '@hg-ui/h-frame',
    outDir: '../dist',
    version: '0.1.0',
    entry: './README.md',
    props: 'Attributes',
    propsName: 'Attribute',
    propsOptions: 'Accepted Values',
    eventsName: 'Event Name',
    reComponentName: (title) => 'h-' + title.replace(/\B([A-Z])/g, '$1').toLowerCase(),
    tableRegExp:
      '#+\\s+(.*\\s*Attributes|.*\\s*Events|.*\\s*Slots|.*\\s*Directives)\\s*\\n+(\\|?.+\\|.+)\\n\\|?\\s*:?-+:?\\s*\\|.+((\\n\\|?.+\\|.+)+)',
  })
}

module.exports = buildHelper
