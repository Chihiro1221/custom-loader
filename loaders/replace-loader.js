function transform(source) {
  const options = this.getOptions();
  const text = source.replace('monday', options.name);
  // 支持异步
  const callback = this.async();
  // Todo:关于如何返回结果
  setTimeout(() => {
    callback(null, text);
  }, 0);
}

module.exports = transform;
