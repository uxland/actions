const core = require('@actions/core');
const npm = require('npm');

const handleError = error => error && core.setFailed(error);

try {
  npm.load({}, error => {
    handleError(error);
    npm.commands.install([], (error, data) => {
      handleError(error);
      npm.commands.test();
    });
  });
} catch (error) {
  core.setFailed(error.message);
}
