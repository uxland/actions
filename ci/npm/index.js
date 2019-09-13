const { exec } = require('child_process');
const core = require('@actions/core');

try {
  exec('npm install');
} catch (error) {
  core.setFailed(error.message);
}
