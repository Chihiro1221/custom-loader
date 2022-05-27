const marked = require('marked');
function transform(source) {
  const html = marked.parse(source);
  return `export default ${JSON.stringify(html)}`;
}

module.exports = transform;
