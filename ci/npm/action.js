const npm = require('@actions/npm');
try {
  npm.Build();
  npm.Test();
} catch (e) {
  console.log(e);
}
