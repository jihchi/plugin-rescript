const execa = require('execa');
const npmRunPath = require('npm-run-path');

module.exports = function plugin(snowpackConfig, _options) {
  return {
    name: '@jihchi/plugin-rescript',
    async run({ isDev, log }) {
      const cmd = execa.command(
        `rescript build -with-deps ${isDev ? '-w' : ''}`,
        {
          env: npmRunPath.env(),
          extendEnv: true,
          windowsHide: false,
          cwd: snowpackConfig.root || process.cwd(),
        }
      );
      const { stdout, stderr } = cmd;

      const onData = (chunk) => {
        let stdOut = chunk.toString();
        // In --watch mode, handle the "clear" character
        if (stdOut.includes('\u001bc') || stdOut.includes('\x1Bc')) {
          log('WORKER_RESET', {});
          stdOut = stdOut.replace(/\x1Bc/, '').replace(/\u001bc/, '');
        }
        log('WORKER_MSG', { msg: stdOut });
      };

      stdout && stdout.on('data', onData);
      stderr && stderr.on('data', onData);

      return cmd.catch((err) => {
        if (/ENOENT/.test(err.message)) {
          log('WORKER_MSG', {
            msg:
              'WARN: "rescript" run failed. Is package `rescript` installed in your project?',
          });
        }
        throw err;
      });
    },
  };
};
