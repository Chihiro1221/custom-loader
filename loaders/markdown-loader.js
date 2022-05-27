const marked = require('marked');
const hljs = require('highlight');

function transform(source) {
  marked.setOptions({
    highlinght: function (code, lang) {
      return hljs.highlight(lang, code).value;
    },
  });
  const html = marked.parse(source);
  return `export default ${JSON.stringify(html)}`;
}

module.exports = transform;
