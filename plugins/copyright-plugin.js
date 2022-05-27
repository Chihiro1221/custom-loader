class CopyRightPlugin {
  constructor(options) {
    console.log(options);
  }

  apply(compiler) {
    // 同步
    compiler.hooks.compile.tap('CopyRightPlugin', () => {
      console.log('compile');
    });

    // 异步
    compiler.hooks.emit.tapAsync('CopyRightPlugin', (Compilation, callback) => {
      Compilation.assets['copyright.txt'] = {
        source() {
          return 'copyright by monday';
        },
        size() {
          return 20;
        },
      };
      callback();
    });
  }
}

module.exports = CopyRightPlugin;
