const { readFileSync, writeFileSync } = require('fs')

module.exports = () => {
  const fileContent = readFileSync('./README.md', 'utf-8');
  const content = fileContent.replace(new RegExp(`:::demo\\n(.*\\s*)\\n:::`, 'g'), ($2, $1) => {
    const compContent = readFileSync(`./examples/${$1}.vue`, 'utf-8');
    let content = '```\n'
    content += compContent
    content += '\n```'
    return content
  })
  writeFileSync('../dist/README.md', content);
  writeFileSync('../README.md', content);
}
