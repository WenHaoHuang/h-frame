// import helper from 'components-helper';
const helper = require('components-helper');

const buildHelper = () => {
  helper({
    name: '@hgui/frame',
    outDir: '../dist',
    version: '0.1.0',
    entry: './README.md',
    props: 'Attributes',
    propsName: 'Attribute',
    propsOptions: 'Accepted Values',
    eventsName: 'Event Name',
    tableRegExp:
      '#+\\s+(.*\\s*Attributes|.*\\s*Events|.*\\s*Slots|.*\\s*Directives)\\s*\\n+(\\|?.+\\|.+)\\n\\|?\\s*:?-+:?\\s*\\|.+((\\n\\|?.+\\|.+)+)',
  })
}

module.exports = buildHelper
