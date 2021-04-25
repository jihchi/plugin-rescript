const runScript = require('@snowpack/plugin-run-script');

module.exports = function plugin(snowpackConfig, { output }) {
  return runScript(snowpackConfig, {
    name: '@jihchi/plugin-rescript',
    cmd: 'rescript build -with-deps',
    watch: '$1 -w',
    output,
  });
};
