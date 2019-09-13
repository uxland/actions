module.exports = async tools => {
  try {
    await tools.runInWorkspace('npm', ['install'], { stdio: [0, 1, 2] });
  } catch (err) {
    throw err;
  }
};
