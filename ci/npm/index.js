const { Toolkit } = require('actions-toolkit');
const core = require('@actions/core');
const runInstall = require('./lib/run-install');
const runTest = require('./lib/run-test');

const handleError = error => error && core.setFailed(error.message);
const run = async tools => {
  try {
    await runInstall(tools);
    await runTest(tools);
  } catch (error) {
    handleError(error);
  }
};

run(new Toolkit());
